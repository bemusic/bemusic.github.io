import _ from 'lodash'
import React, { useEffect, useMemo } from 'react'
import { NotechartPreview } from './NotechartPreview'
import { PreviewState } from './PreviewState'

export type PreviewColumn = {
  x: number
  width: number
  column: string | null
  sprite?: PreviewNoteSprite
}

export type PreviewNoteSprite = {
  x: number
  width: number
  highlight?: boolean
}

const sprites = {
  scratch: { x: 0, width: 61 },
  white: { x: 62, width: 34, highlight: true },
  blue: { x: 97, width: 26 },
  green: { x: 159, width: 26 },
}

class PreviewLayout {
  columns: PreviewColumn[]
  totalWidth: number
  columnMapping: Record<string, PreviewColumn>
  constructor(keymap: string) {
    let nextX = 0
    const column = (width: number, name: string | null): PreviewColumn => {
      const x = nextX
      nextX += width + 1
      return { x, width, column: name }
    }
    const noteColumn = (
      sprite: PreviewNoteSprite,
      name: string
    ): PreviewColumn => {
      return { ...column(sprite.width, name), sprite }
    }
    this.columns = keymap.split(' ').map((c) => {
      if (c === '-') return column(72, null)
      if (c.endsWith('s')) return noteColumn(sprites.scratch, c.slice(0, -1))
      if (c.endsWith('b')) return noteColumn(sprites.blue, c.slice(0, -1))
      if (c.endsWith('g')) return noteColumn(sprites.green, c.slice(0, -1))
      return noteColumn(sprites.white, c)
    })
    this.totalWidth = nextX
    this.columnMapping = _.fromPairs(
      this.columns.filter((c) => c.column != null).map((c) => [c.column, c])
    )
  }
}

export interface PreviewCanvas {
  previewState: PreviewState
  notechartPreview: NotechartPreview
}

export const PreviewCanvas: FC<PreviewCanvas> = (props) => {
  const keymap = 'SCs 1 2b 3 4g 5 6b 7 - 8 9b 10 11g 12 13b 14 SC2s'
  const notesImage = useImage('/skins/default/Note/DX/Note.png')
  const landmineImage = useImage('/skins/default/Note/DX/Landmine.png')
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const layout = useMemo(() => new PreviewLayout(keymap), [keymap])
  const width = layout.totalWidth + 1
  const height = 468

  const viewport = useMemo(() => {
    return props.notechartPreview.getViewport(
      props.previewState.currentTime,
      props.previewState.hiSpeed
    )
  }, [
    props.notechartPreview,
    props.previewState.currentTime,
    props.previewState.hiSpeed,
  ])

  const maxCombo = props.notechartPreview.getMaxCombo()

  const comboInfo = useMemo(() => {
    return props.notechartPreview.getComboInfo(props.previewState.currentTime)
  }, [props.notechartPreview, props.previewState.currentTime])

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return

    // background
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)

    // lines
    for (const column of layout.columns) {
      ctx.fillStyle = '#555'
      ctx.fillRect(column.x, 0, 1, height)
      if (column.sprite?.highlight) {
        ctx.fillStyle = '#111'
        ctx.fillRect(column.x + 1, 0, column.width, height)
      }
    }
    ctx.fillStyle = '#555'
    ctx.fillRect(layout.totalWidth, 0, 1, height)

    ctx.textAlign = 'center'
    ctx.font = 'bold 18px sans-serif'
    for (const barLine of viewport.visibleBarLines) {
      const y = Math.round(height - barLine.y * height)
      ctx.fillRect(0, y - 1, layout.totalWidth, 1)
      ctx.fillText('#' + barLine.measureNumber, layout.totalWidth / 2, y - 4)
    }

    if (notesImage && landmineImage) {
      for (const note of viewport.visibleNotes) {
        const column = layout.columnMapping[note.gameEvent.column]
        if (column?.sprite) {
          const y = Math.round(height - note.y * height)
          if (note.long) {
            const endY = Math.round(height - note.long.endY * height)
            const spriteYOffset = note.long.active ? 100 : 0
            ctx.drawImage(
              notesImage,
              column.sprite.x,
              104 + spriteYOffset,
              column.width,
              8,
              column.x + 1,
              y - 8,
              column.width,
              8
            )
            ctx.drawImage(
              notesImage,
              column.sprite.x,
              12 + spriteYOffset,
              column.width,
              8,
              column.x + 1,
              endY - 12,
              column.width,
              8
            )
            const noteHeight = y - endY - 4
            if (noteHeight > 0) {
              ctx.drawImage(
                notesImage,
                column.sprite.x,
                22 + spriteYOffset,
                column.width,
                64,
                column.x + 1,
                endY - 4,
                column.width,
                noteHeight
              )
            }
          } else {
            const image = note.type === 'landmine' ? landmineImage : notesImage
            ctx.drawImage(
              image,
              column.sprite.x,
              0,
              column.width,
              12,
              column.x + 1,
              y - 12,
              column.width,
              12
            )
          }
        }
      }
    }

    if (comboInfo) {
      const deltaTime = props.previewState.currentTime - comboInfo.comboTime
      const opacity = Math.max(0, 1 - deltaTime)
      if (opacity > 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')'
        ctx.font = 'bold 36px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(
          `${comboInfo.comboCount} / ${maxCombo}`,
          layout.totalWidth / 2,
          height - 64 - opacity ** 8 * 8
        )
      }
    }
  }, [
    width,
    height,
    layout,
    viewport,
    notesImage,
    maxCombo,
    comboInfo,
    props.previewState.currentTime,
  ])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        imageRendering: 'pixelated',
      }}
    />
  )
}

function useImage(src: string) {
  const [image, setImage] = React.useState<HTMLImageElement | null>(null)
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setImage(img)
    return () => {
      img.onload = null
    }
  }, [src])
  return image
}
