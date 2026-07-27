// :doc:
//
// High-accuracy timer, optionally synchronized globally.

import * as BemuseLogger from 'bemuse/logger'

const Log = BemuseLogger.forModule('timesynchro')

// Public time endpoint used to synchronize the clock. Cloudflare's
// `/cdn-cgi/trace` returns a `ts=<unix seconds>` line with sub-second precision,
// sends `Access-Control-Allow-Origin: *`, and is served from an anycast PoP — so
// players in the same location hit the same node and share the same clock. This
// replaces the former `timesynchro` WebSocket service (its Heroku host is gone).
const TIME_ENDPOINT = 'https://cloudflare.com/cdn-cgi/trace'

// Number of round-trips to the time endpoint. We take the median offset to
// reject samples skewed by network jitter.
const SAMPLE_COUNT = 8

// Per-request timeout so an unreachable endpoint can't hang synchronization.
const REQUEST_TIMEOUT_MS = 5000

let offset = 0

function now() {
  if (window.performance && typeof window.performance.now === 'function') {
    return window.performance.now()
  } else {
    return Date.now()
  }
}

now.synchronize = function () {
  synchronizeViaHttp().then(
    (serverEpochOffset) => {
      // serverEpochOffset ≈ realEpochTime − Date.now(). Rebase it onto now()'s
      // clock (performance.now) so that `now() + offset` ≈ realEpochTime.
      offset = serverEpochOffset + Date.now() - now()
      Log.info(`Synchronized time with ${TIME_ENDPOINT}! Offset = ${offset}`)
    },
    (err) => {
      Log.error('Cannot synchronize time: ' + err)
    }
  )
}

// Estimates the offset between the server clock and the local `Date.now()`
// clock over a series of round-trips. For each request we sample the local time
// just before and after, assume the network delay is symmetric, and take
// `serverTime − localMidpoint` as the estimate. The median is returned.
async function synchronizeViaHttp(): Promise<number> {
  const estimates: number[] = []
  for (let i = 0; i < SAMPLE_COUNT; i++) {
    try {
      const before = Date.now()
      const response = await fetch(TIME_ENDPOINT, {
        cache: 'no-store',
        signal: timeoutSignal(REQUEST_TIMEOUT_MS),
      })
      const after = Date.now()
      const serverTime = parseServerTime(await response.text())
      if (serverTime != null) {
        estimates.push(serverTime - (before + after) / 2)
      }
    } catch {
      // Ignore individual failures; a few bad samples are tolerable.
    }
  }
  if (!estimates.length) {
    throw new Error('no offset received')
  }
  return median(estimates)
}

// Parses the server time (epoch milliseconds) from a response body. Accepts
// Cloudflare's `/cdn-cgi/trace` format (a `ts=<unix seconds>` line, possibly
// fractional) and a bare epoch-millisecond number. Exported for testing.
export function parseServerTime(body: string): number | null {
  const text = body.trim()
  const traceMatch = text.match(/(?:^|\n)ts=([\d.]+)/)
  if (traceMatch) {
    return Math.round(parseFloat(traceMatch[1]) * 1000)
  }
  if (/^\d+$/.test(text)) {
    return Number(text)
  }
  return null
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid]
}

function timeoutSignal(ms: number): AbortSignal | undefined {
  if (typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal) {
    return AbortSignal.timeout(ms)
  }
  return undefined
}

now.synchronized = function () {
  const o = offset
  return () => now() + o
}
export { now }
export default now
