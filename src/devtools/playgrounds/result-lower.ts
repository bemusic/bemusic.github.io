import { showResultPlayground } from '../result-playground'

// The submitted score (400000) is LOWER than the score `tester` already has on
// this chart in the fake scoreboard (543210 on md5 fb3dab…, KB — see
// createFakeScoreboardClient), so submitting it must KEEP the higher existing
// score. Used by the "Keeps highest score" e2e test.
export function main(): void {
  showResultPlayground({
    score: 400000,
    accuracy: 0.9,
    md5: 'fb3dab834591381a5b8188bc2dc9c4b7',
    playMode: 'KB',
  })
}
