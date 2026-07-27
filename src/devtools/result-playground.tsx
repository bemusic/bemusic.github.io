import ResultScene, {
  Result,
  ResultSceneProps,
} from 'bemuse/app/ui/ResultScene'

import { Chart } from 'bemuse-types'
import { MappingMode } from 'bemuse/rules/mapping-mode'
import { Provider } from 'react-redux'
import React from 'react'
import { SceneManager } from 'bemuse/scene-manager'
import configureStore from 'bemuse/app/redux/configureStore'

export interface ResultPlaygroundOptions {
  score: number
  accuracy: number
  md5: string
  playMode: MappingMode
}

// Shared renderer for the ResultScene playgrounds (see ./playgrounds/result*.ts).
export function showResultPlayground(options: ResultPlaygroundOptions): void {
  const result: Result = {
    1: 9999,
    2: 999,
    3: 99,
    4: 9,
    missed: 123,
    score: options.score,
    maxCombo: 5555,
    accuracy: options.accuracy,
    totalCombo: 11106,
    totalNotes: 11106,
    tainted: false,
    log: '',
    grade: 'A',
    deltas: [0, 0.01, 0.03, -0.03, -0.06],
  }
  // A playground fixture only needs the few chart fields ResultScene reads.
  const chart = {
    info: {
      title: 'Test Song',
      subtitles: ['fl*cknother'],
      artist: 'iaht',
      subartists: ['obj.flicknote'],
      genre: 'Frantic Hardcore',
      level: 17,
    },
    md5: options.md5,
  } as unknown as Chart
  const props: ResultSceneProps = {
    result,
    chart,
    playMode: options.playMode,
    lr2Timegate: [20, 40],
    onExit: () => alert('Exit!'),
    onReplay: () => alert('Replay!'),
  }
  const sceneManager = new SceneManager(({ children }) => <>{children}</>)
  sceneManager.display(
    <Provider store={configureStore()}>
      <ResultScene {...props} />
    </Provider>
  )
}
