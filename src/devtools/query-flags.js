
import query from 'bemuse/utils/query'

export function shouldShowOptions() {
  return query.BEMUSE_SHOW_OPTIONS === '1'
}

export function shouldEnableBenchmark() {
  return query.BEMUSE_BENCHMARK === '1'
}
