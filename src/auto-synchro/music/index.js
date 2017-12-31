import _ from 'lodash'
import co from 'co'
import context from 'bemuse/audio-context'
import download from 'bemuse/utils/download'
import once from 'once'
import SamplingMaster, { canPlay } from 'bemuse/sampling-master'

/**
 * The audio format to use (.ogg or .m4a)
 */
let audioExt = once(
  () => (canPlay('audio/ogg; codecs="vorbis"') ? '.ogg' : '.m4a')
)

/**
 * The asset URL of these files...
 */
let ASSET_URLS = {
  'bgm.m4a': require('./data/bgm.m4a'),
  'bgm.ogg': require('./data/bgm.ogg'),
  'intro.m4a': require('./data/intro.m4a'),
  'intro.ogg': require('./data/intro.ogg'),
  'kick.m4a': require('./data/kick.m4a'),
  'kick.ogg': require('./data/kick.ogg'),
  'snare.m4a': require('./data/snare.m4a'),
  'snare.ogg': require('./data/snare.ogg')
}

/**
 * Loads the files and create a music instance.
 */
export function load () {
  return co(function * () {
    let master = new SamplingMaster(context)
    let sample = name =>
      download(ASSET_URLS[`${name}${audioExt()}`])
        .as('arraybuffer')
        .then(buf => master.sample(buf))
    let samples = _.fromPairs(
      yield Promise.all(
        ['bgm', 'intro', 'kick', 'snare'].map(name =>
          sample(name).then(sampleObj => [name, sampleObj])
        )
      )
    )
    return music(master, samples)
  })
}

/**
 * Takes the sample and sequences a music
 */
function music (master, samples) {
  return function play (callbacks) {
    master.unmute()

    let BPM = 148
    let time = new AudioTime(context, -1)

    let filter = context.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 0
    filter.Q.value = 10
    filter.connect(context.destination)

    let state = { part2: null }

    let sequence = beatSequencer(BPM, (beat, delay) => {
      if (beat % 8 !== 7) {
        samples.kick.play(delay)
      }
      if (state.part2 !== null) {
        beat -= state.part2.begin
        if (beat % 128 === 0) {
          samples.bgm.play(delay)
        }
      } else {
        if (beat % 32 === 0) {
          samples.intro.play(delay, { node: filter })
        }
        if (beat % 32 === 31) {
          if (state.ok === true) {
            samples.snare.play(delay)
            state.part2 = { begin: beat + 1 }
            callbacks.a()
          }
        }
      }
    })

    setInterval(() => sequence(time.t), 33)

    return {
      ok () {
        state.ok = true
      },
      progress (p) {
        filter.frequency.value = 20000 * p * p * p
      },
      getSample () {
        let nearestBeat = Math.round(time.t * BPM / 60)
        let nearestBeatTime = nearestBeat * 60 / BPM
        return [nearestBeat, time.t - nearestBeatTime]
      }
    }
  }
}

function beatSequencer (bpm, f) {
  let beat = -1
  return time => {
    let nowBeat = Math.floor((time + 0.1) * bpm / 60)
    while (beat < nowBeat) {
      beat += 1
      let beatTime = beat * 60 / bpm
      f(beat, beatTime - time)
    }
  }
}

class AudioTime {
  constructor (audioContext, leadTime) {
    this._context = audioContext
    this._start = audioContext.currentTime
    this._startTime = leadTime
  }
  get t () {
    return this._context.currentTime - this._start + this._startTime
  }
}
