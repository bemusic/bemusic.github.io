import _ from 'lodash'
import invariant from 'invariant'
type VelocityControllerOptions = {
  enabled: boolean
  initialSpeed: number
  desiredLeadTime: number
  songBPM: number
  laneCover?: number
}
type VelocityController = {
  getInitialSpeed(): number
  handleGameFinish(
    finishingSpeed: number,
    options: {
      saveSpeed: (speed: number) => void
      saveLeadTime: (speed: number) => void
    }
  ): void
}
export default (options: VelocityControllerOptions): VelocityController => {
  invariant(typeof options.enabled === 'boolean', 'enabled must be a boolean')
  invariant(
    typeof options.initialSpeed === 'number',
    'initialSpeed must be a number'
  )
  invariant(
    typeof options.desiredLeadTime === 'number',
    'desiredLeadTime must be a number'
  )
  invariant(typeof options.songBPM === 'number', 'songBPM must be a number')
  if (options.enabled) {
    return autoVelocity({
      desiredLeadTime: options.desiredLeadTime,
      songBPM: options.songBPM,
      laneCover: options.laneCover || 0,
    })
  } else {
    return manualVelocity(options.initialSpeed)
  }
}

function manualVelocity(initialSpeed: number): VelocityController {
  return {
    getInitialSpeed() {
      return initialSpeed
    },
    handleGameFinish(finishingSpeed, { saveSpeed }) {
      saveSpeed(finishingSpeed)
    },
  }
}

function autoVelocity({
  songBPM,
  desiredLeadTime,
  laneCover,
}: {
  songBPM: number
  desiredLeadTime: number
  laneCover: number
}): VelocityController {
  const visiblePortion = 1 - Math.abs(laneCover)
  const nominalSpeedLeadTime = ((60000 * 5) / songBPM) * visiblePortion
  const initialSpeed = _.minBy(_.range(1, 999).map(x => x / 10), speed =>
    Math.abs(desiredLeadTime - nominalSpeedLeadTime / speed)
  )!
  return {
    getInitialSpeed() {
      return initialSpeed
    },
    handleGameFinish(finishingSpeed, { saveSpeed, saveLeadTime }) {
      saveSpeed(finishingSpeed)
      if (finishingSpeed.toFixed(1) !== initialSpeed.toFixed(1)) {
        saveLeadTime(Math.round(nominalSpeedLeadTime / finishingSpeed))
      }
    },
  }
}
