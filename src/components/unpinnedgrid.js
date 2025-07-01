import React, { useRef }        from 'react'
import { Masonry, useContainerPosition } from 'masonic'

export default function UnpinnedGrid({
  items,
  render,
  vw = 0.20,       // default to 30vw
  gutter = 16,     // gap in px
  overscan = 3     // buffer rows
}) {
  const ref = useRef(null)
  const { width: containerWidth = window.innerWidth } =
    useContainerPosition(ref)


  const columnWidth = Math.floor(containerWidth * vw)

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <Masonry
        items={items}
        columnWidth={columnWidth}
        columnGutter={gutter}
        overscanBy={overscan}
        render={render}
      />
    </div>
  )
}
