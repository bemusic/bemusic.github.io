import Notechart, {
  GameLandmine,
  GameNote,
  SoundedEvent,
} from 'bemuse-notechart'
import SamplingMaster, {
  PlayInstance,
  Sample,
  SoundGroup,
} from 'bemuse/sampling-master'
import _ from 'lodash'

export interface NotechartPreview {
  /**
   * Song’s length in seconds.
   */
  duration: number

  name: string
  description: string

  getViewport(currentTime: number, hiSpeed: number): PreviewViewport
  getMeasureInfo(currentTime: number): MeasureInfo
  getCurrentBpm(currentTime: number): number
  getCurrentScroll(currentTime: number): number
  getCurrentSpeed(currentTime: number): number
  play(delegate: NotechartPreviewPlayerDelegate): NotechartPreviewPlayer
  measureToSeconds(measure: number): number
  getMeasureJumpTarget(currentTime: number, direction: number): number
  getComboInfo(currentTime: number): ComboInfo | null
  getMaxCombo(): number
}

export interface PreviewViewport {
  visibleNotes: VisibleNote[]
  visibleBarLines: VisibleBarLine[]
}

export interface MeasureInfo {
  currentBeat: number
  measureNumber: number
  measureStartBeat: number
  measureEndBeat?: number
}

export interface ComboInfo {
  comboTime: number
  comboCount: number
}

export interface NotechartPreviewPlayer {
  stop(): void
}

export interface NotechartPreviewPlayerDelegate {
  startTime: number

  onFinish(): void
  onTimeUpdate(currentTime: number): void
}

export type VisibleNote = {
  y: number
  long?: { endY: number; active: boolean }
  gameEvent: GameNote | GameLandmine
  type: 'note' | 'landmine'
}

export type VisibleBarLine = {
  y: number
  measureNumber: number
}

export function createNullNotechartPreview(): NotechartPreview {
  const warning =
    location.hostname !== 'bemuse.ninja'
      ? ' [NOTE: Do not bookmark this URL because it is a preview and this URL will stop working in the future.]'
      : ''
  return {
    duration: 0.99,
    name: 'No BMS/bmson loaded',
    description:
      'Drop a folder with BMS/bmson files into this window to preview it.' +
      warning,
    getViewport: () => ({
      visibleBarLines: [],
      visibleNotes: [],
    }),
    getMeasureInfo: () => ({
      currentBeat: 0,
      measureNumber: 0,
      measureStartBeat: 0,
    }),
    getCurrentBpm: () => 0,
    getCurrentScroll: () => 0,
    getCurrentSpeed: () => 0,
    play: (delegate) => {
      setTimeout(() => {
        delegate.onFinish()
      })
      return { stop: () => {} }
    },
    measureToSeconds: () => 0,
    getMeasureJumpTarget: () => 0,
    getComboInfo: () => null,
    getMaxCombo: () => 0,
  }
}

export type PreviewSoundSample = {
  filename: string
  sample: Sample | null
}

export function createNotechartPreview(
  notechart: Notechart,
  filename: string,
  samplingMaster: SamplingMaster,
  soundGroup: SoundGroup,
  samples: PreviewSoundSample[]
): NotechartPreview {
  return new BemuseNotechartPreview(
    notechart,
    filename,
    samplingMaster,
    soundGroup,
    samples
  )
}

class BemuseNotechartPreview implements NotechartPreview {
  private _sortedGameNotes: GameNote[]
  private _sortedSoundEvents: SoundedEvent[]
  private _secondsToBeatCache?: { seconds: number; beat: number }
  private _comboPreviewer: ComboPreviewer
  private _sortedGameLandmines: GameNote[]

  constructor(
    private _notechart: Notechart,
    private _filename: string,
    private _samplingMaster: SamplingMaster,
    private _soundGroup: SoundGroup,
    private _samples: PreviewSoundSample[]
  ) {
    this._sortedGameNotes = _.sortBy(this._notechart.notes, (e) => e.position)
    this._sortedGameLandmines = _.sortBy(
      this._notechart.landmines,
      (e) => e.position
    )
    this._sortedSoundEvents = _.sortBy(
      [...this._notechart.notes, ...this._notechart.autos],
      (e) => e.time
    )
    this._comboPreviewer = new ComboPreviewer(this._notechart.notes)
  }

  get duration() {
    return this._notechart.duration
  }

  get name() {
    return this._filename
  }

  get description() {
    return this._notechart.songInfo.title
  }

  getViewport(currentTime: number, hiSpeed: number): PreviewViewport {
    const beat = this._secondsToBeat(currentTime)
    const position = this._notechart.beatToPosition(beat)
    const speed = this._notechart.spacingAtBeat(beat)
    const windowSize = 4 / speed / hiSpeed
    const visibleNotes: VisibleNote[] = []
    const insideView = (gameNote: GameNote) => {
      if (gameNote.end) {
        if (currentTime > gameNote.end.time) return false
        if (gameNote.position > position + windowSize * 1.5) return false
        if (gameNote.end.position < position - windowSize * 0.5) return false
        return true
      } else {
        if (currentTime > gameNote.time) return false
        if (gameNote.position > position + windowSize * 1.5) return false
        if (gameNote.position < position - windowSize * 0.5) return false
        return true
      }
    }
    for (const gameNote of this._sortedGameNotes) {
      if (!insideView(gameNote)) continue
      const delta = gameNote.position - position
      const y = delta / windowSize
      const visibleNote: VisibleNote = {
        gameEvent: gameNote,
        y,
        type: 'note',
      }
      if (gameNote.end) {
        const endDelta = gameNote.end.position - position
        const endY = endDelta / windowSize
        const active =
          currentTime >= gameNote.time && currentTime < gameNote.end.time
        visibleNote.long = { endY, active }
      }
      visibleNotes.push(visibleNote)
    }
    for (const gameLandmine of this._sortedGameLandmines) {
      if (!insideView(gameLandmine)) continue
      const delta = gameLandmine.position - position
      const y = delta / windowSize
      const visibleNote: VisibleNote = {
        gameEvent: gameLandmine,
        y,
        type: 'landmine',
      }
      visibleNotes.push(visibleNote)
    }
    const visibleBarLines: VisibleBarLine[] = []
    for (const [i, barLine] of this._notechart.barLines.entries()) {
      if (barLine.position > position + windowSize * 1.5) continue
      if (barLine.position < position - windowSize * 0.5) continue
      const delta = barLine.position - position
      visibleBarLines.push({ y: delta / windowSize, measureNumber: i })
    }
    return { visibleNotes, visibleBarLines }
  }

  getMeasureInfo(currentTime: number): MeasureInfo {
    const beat = this._secondsToBeat(currentTime)
    let currentMeasure = 0
    let currentMeasureStart = 0
    for (const [i, barLine] of this._notechart.barLines.entries()) {
      if (beat < barLine.beat) {
        break
      }
      currentMeasure = i
      currentMeasureStart = barLine.beat
    }
    return {
      currentBeat: beat,
      measureNumber: currentMeasure,
      measureStartBeat: currentMeasureStart,
      measureEndBeat: this._notechart.barLines[currentMeasure + 1]?.beat,
    }
  }

  getCurrentBpm(currentTime: number): number {
    return this._notechart.bpmAtBeat(this._secondsToBeat(currentTime))
  }

  getCurrentScroll(currentTime: number): number {
    return this._notechart.scrollSpeedAtBeat(this._secondsToBeat(currentTime))
  }

  getCurrentSpeed(currentTime: number): number {
    return this._notechart.spacingAtBeat(this._secondsToBeat(currentTime))
  }

  measureToSeconds(measure: number): number {
    const beat = this._notechart.measureToBeat(measure)
    return this._notechart.beatToSeconds(beat)
  }

  getMeasureJumpTarget(currentTime: number, direction: number): number {
    const beat = this._secondsToBeat(currentTime)
    const closestBarLine = _.minBy(this._notechart.barLines, (b) =>
      Math.abs(b.beat - beat)
    )
    if (!closestBarLine) {
      return currentTime
    }
    const index = this._notechart.barLines.indexOf(closestBarLine)
    const target = this._notechart.barLines[index + direction]
    if (!target) {
      return currentTime
    }
    return target.time
  }

  getComboInfo(currentTime: number): ComboInfo | null {
    return this._comboPreviewer.getComboInfo(currentTime)
  }

  getMaxCombo(): number {
    return this._comboPreviewer.getMaxCombo()
  }

  private _secondsToBeat(currentTime: number) {
    if (
      !this._secondsToBeatCache ||
      this._secondsToBeatCache.seconds !== currentTime
    ) {
      this._secondsToBeatCache = {
        seconds: currentTime,
        beat: this._notechart.secondsToBeat(currentTime),
      }
    }
    return this._secondsToBeatCache.beat
  }

  play(delegate: NotechartPreviewPlayerDelegate) {
    this._samplingMaster.unmute()
    console.log(this._sortedSoundEvents)
    console.log(this._notechart.keysounds)
    const player = new BemuseNotechartPreviewPlayer(
      this._samplingMaster,
      this._soundGroup,
      this._sortedSoundEvents,
      this._notechart.keysounds,
      this._samples,
      delegate
    )
    player.play()
    return player
  }
}

class BemuseNotechartPreviewPlayer implements NotechartPreviewPlayer {
  private _cursor = 0
  private _sampleMap = new Map<string, Sample>()
  private _startAudioTime = 0
  private _startSongTime = 0
  private _stopped = false
  private _playingSamples = new Map<string, PlayInstance>()

  constructor(
    private _samplingMaster: SamplingMaster,
    private _soundGroup: SoundGroup,
    private _sortedSoundEvents: SoundedEvent[],
    private _keysounds: Record<string, string>,
    _samples: PreviewSoundSample[],
    private _delegate: NotechartPreviewPlayerDelegate
  ) {
    for (const { filename, sample } of _samples) {
      if (sample) {
        this._sampleMap.set(filename, sample)
      }
    }
  }

  play() {
    this._startAudioTime = this._samplingMaster.currentTime
    this._startSongTime = this._delegate.startTime
    const frame = () => {
      if (this._stopped) return
      this._advance()
      requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }

  private _advance() {
    const currentTime =
      this._samplingMaster.currentTime -
      this._startAudioTime +
      this._startSongTime
    for (; this._cursor < this._sortedSoundEvents.length; this._cursor++) {
      const nextEvent = this._sortedSoundEvents[this._cursor]
      if (nextEvent.time > currentTime + 0.1) {
        break
      }

      if (nextEvent.keysoundStart) {
        // bmson’s "continue" notes do not trigger a new sound
        continue
      }

      const keysound = nextEvent.keysound
      const filename = this._keysounds[keysound.toLowerCase()]
      if (!filename) {
        continue
      }

      const sample = this._sampleMap.get(filename)
      if (!sample) {
        continue
      }

      let delay = 0
      let offset = 0
      if (nextEvent.time > currentTime) {
        delay = nextEvent.time - currentTime
      } else if (nextEvent.time < currentTime) {
        offset = currentTime - nextEvent.time
      }

      if (offset >= sample.duration) {
        continue
      }
      this._choke(keysound, delay)
      const instance = sample.play(delay, {
        start: offset,
        group: this._soundGroup,
      })
      this._playingSamples.set(keysound, instance)
    }
    this._delegate.onTimeUpdate(currentTime)
  }

  private _choke(keysound: string, delay: number) {
    const playing = this._playingSamples.get(keysound)
    if (!playing) {
      return
    }
    // TODO: Use Web Audio API instead
    setTimeout(() => {
      playing.stop()
    }, delay * 1000)
  }

  stop() {
    this._stopped = true
    for (const playing of this._playingSamples.values()) {
      playing.destroy()
    }
    this._playingSamples.clear()
  }
}

class ComboPreviewer {
  private _events: number[]

  constructor(notes: GameNote[]) {
    this._events = _.sortBy(
      _.flatMap(notes, (note) => {
        if (note.end) {
          return [note.time, note.end.time]
        } else {
          return [note.time]
        }
      }),
      _.identity
    )
  }
  getComboInfo(time: number): ComboInfo | null {
    const index = _.sortedLastIndex(this._events, time)
    if (index === 0) {
      return null
    }
    const prev = this._events[index - 1]
    return {
      comboCount: index,
      comboTime: prev,
    }
  }
  getMaxCombo(): number {
    return this._events.length
  }
}
