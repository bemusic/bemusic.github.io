import { showResultPlayground } from '../result-playground'

export function main(): void {
  showResultPlayground({
    score: 543210,
    accuracy: 0.97,
    md5: '12345670123456789abcdef89abemuse',
    playMode: 'TS',
  })
}
