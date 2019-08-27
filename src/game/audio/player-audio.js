import _ from 'lodash'

import WaveFactory from './wave-factory'
import { isBad } from '../judgments'

function autoplayer(array) {
  array = _.sortBy(array, 'time')
  let i = 0
  return {
    next(time) {
      let out = []
      for (; i < array.length && time >= array[i].time; i++) {
        out.push(array[i])
      }
      return out
    },
  }
}

export class PlayerAudio {
  constructor({ player, samples, master, waveFactory, volume }) {
    let notechart = player.notechart
    this._waveFactory =
      waveFactory ||
      new WaveFactory(master, samples, notechart.keysounds, { volume })
    this._autos = autoplayer(notechart.autos)
    this._notes = autoplayer(notechart.notes)
    this._played = new Map()
    this._autosound = !!player.options.autosound
  }
  update(time, state) {
    this._playAutokeysounds(time)
    this._playAutosounds(time, state)
    this._handleSoundNotifications((state && state.notifications.sounds) || [])
  }
  _playAutokeysounds(time) {
    for (let auto of this._autos.next(time + 1 / 30)) {
      this._waveFactory.playAuto(auto, auto.time - time)
    }
  }
  _playAutosounds(time, state) {
    let autosounds = this._notes.next(time + 1 / 30)
    let poor = state && state.stats.poor
    let shouldPlay = this._autosound && !poor
    if (!shouldPlay) return
    for (let note of autosounds) {
      this._hitNote(note, note.time - time)
    }
  }
  _handleSoundNotifications(soundNotifications) {
    for (let notification of soundNotifications) {
      let { type, note } = notification
      if (type === 'hit') {
        this._hitNote(note, 0, notification.judgment)
      } else if (type === 'break') {
        this._breakNote(note)
      } else if (type === 'free') {
        this._waveFactory.playFree(note, 0)
      }
    }
  }
  _hitNote(note, delay, judgment) {
    let instance = this._played.get(note)
    if (!instance) {
      instance = this._waveFactory.playNote(note, delay)
      this._played.set(note, instance)
    }
    if (instance) {
      if (isBad(judgment)) {
        instance.bad()
      }
    }
  }
  _breakNote(note) {
    let instance = this._played.get(note)
    if (instance) {
      instance.stop()
    }
  }
}

export default PlayerAudio
