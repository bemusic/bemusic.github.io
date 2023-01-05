import './MusicInfoTabStats.scss'

import * as ReduxState from '../redux/ReduxState'

import { ScoreboardDataRecord } from 'bemuse/online'
import { useSelector } from 'react-redux'
import { usePersonalRecordsByMd5Query } from 'bemuse/online/hooks'

export interface PartialChart {
  md5: string
}

export const usePersonalRecord = (
  chart: PartialChart
): [isLoading: boolean, record: ScoreboardDataRecord | null] => {
  const playMode = useSelector(ReduxState.selectPlayMode)
  const query = usePersonalRecordsByMd5Query(chart)
  return [
    query.isLoading,
    query.data?.find((record) => record.playMode === playMode) || null,
  ]
}
