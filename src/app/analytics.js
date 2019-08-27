import ObjectID from 'bson-objectid'
import mean from 'mean'
import median from 'median'
import variance from 'variance'
import { MISSED } from 'bemuse/game/judgments'
import { stringify } from 'qs'

import * as Options from './entities/Options'
import getLR2Score from './interactors/getLR2Score'
import getNonMissedDeltas from './interactors/getNonMissedDeltas'

let ga = window.ga || function() {}
const startTime = Date.now()
const sid = ObjectID.generate()

function getLabel(chart) {
  return `${chart.md5}`
}

function getSongTitle(song) {
  if (song.custom) return '(custom song)'
  return song.title
}

export function send(category, action, label, value, extra) {
  console.log('[Analytics]', category, action, label, value, extra)
  ga('send', 'event', category, action, label, value)
  try {
    if (window.ga) {
      const sessionLength = Date.now() - startTime
      const data = {
        info: { sid, category, action, label, value, extra, t: sessionLength },
      }
      window.navigator.sendBeacon(
        'https://analytics.bemuse.ninja/collect.php?' + stringify(data)
      )
    }
  } catch (e) {
    console.warn('[Analytics]', 'Cannot send beacon:', e)
  }
  try {
    if (window.amplitude) {
      window.amplitude.getInstance().logEvent(`${category} / ${action}`, {
        label,
        value,
        ...extra,
      })
    }
  } catch (e) {
    console.warn('[Analytics]', 'Cannot send to Amplitude:', e)
  }
}

export function gameStart(song, chart, gameMode, options) {
  send('song', 'play', getSongTitle(song))
  send('game', 'start', getLabel(chart), chart.info.level, {
    gameMode,
    bga: Options.isBackgroundAnimationsEnabled(options) ? 'y' : 'n',
    autoVelocity: Options.isAutoVelocityEnabled(options) ? 'y' : 'n',
    latency: +options['system.offset.audio-input'],
  })
  send('game', 'mode', gameMode)
}

export function gameFinish(song, chart, gameState, gameMode) {
  const player = gameState.game.players[0]
  const notechart = player.notechart
  const state = gameState.player(player)
  const stats = state.stats
  send('song', 'finish', getSongTitle(song))
  send('game', 'finish', getLabel(chart), stats.score, {
    gameMode: gameMode,
    level: chart.info.level,
    bpm: chart.bpm.median,
    speed: state.speed,
    score: stats.score,
    maxCombo: stats.maxCombo,
    totalCombo: stats.totalCombo,
    totalNotes: stats.totalNotes,
    accuracy: stats.accuracy,
    stats: getDeltaStats(stats.deltas),
    lr2Score: getLR2Score(stats.deltas, notechart.expertJudgmentWindow),
    laneCover: player.options.laneCover,
    placement: player.options.placement,
    scratch: player.options.scratch,
    counts: {
      w1: stats.counts['1'],
      w2: stats.counts['2'],
      w3: stats.counts['3'],
      w4: stats.counts['4'],
      w5: stats.counts[MISSED],
    },
  })
}

export function recordGameLoadTime(gameLoadTimeMillis) {
  console.log(`[Analytics] Game load time: ${gameLoadTimeMillis} ms`)
  ga('send', 'timing', 'Game', 'load', gameLoadTimeMillis)
}

export function getDeltaStats(deltas) {
  const nonMissDeltas = getNonMissedDeltas(deltas)
  return {
    sd: Math.sqrt(variance(nonMissDeltas)),
    mean: mean(nonMissDeltas),
    median: median(nonMissDeltas),
  }
}

export function gameEscape(song, chart, gameState) {
  let state = gameState.player(gameState.game.players[0])
  send('song', 'escape', getSongTitle(song))
  send('game', 'escape', getLabel(chart), state.stats.score)
}

export function gameQuit(song, chart, gameState) {
  let state = gameState.player(gameState.game.players[0])
  send('song', 'quit', getSongTitle(song))
  send('game', 'quit', getLabel(chart), state.stats.score)
}

export function action(label) {
  send('action', 'trigger', label)
}
