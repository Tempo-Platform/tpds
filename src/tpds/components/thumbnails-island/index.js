import React from 'react'
import clsx from 'clsx'

function ThumbnailsIsland({
  items = null,
  backgroundColor = '#96969621',
  thumbnailsBackgroundColor = '#ffffff21',
  removeEnclosingIsland = false,
  thumbnailsPadding = 0,
  thumbnailsBorderRadius = 6,
  islandClassName,
  thumbnailClassName,
  rootClassName,
}) {
  if (!items) {
    console.error('ThumbnailsIsland: items prop is required')
    return null
  }
  const styles1Items = 'grid-cols-1 gap-3 p-2'
  const styles2Items = 'grid-cols-2 gap-3 p-2'
  const styles3Items = 'grid-cols-3 gap-1.5 p-2'
  const styles4Items = 'grid-cols-4 gap-2 p-2'
  const styles5Items = 'grid-cols-5 gap-2 p-2'
  const styles6Items = 'grid-cols-6 gap-1 p-1'

  const gridClassName = clsx(
    `grid w-full h-auto rounded-lg`,
    islandClassName,
    items.length === 1 && styles1Items,
    items.length === 2 && styles2Items,
    items.length === 3 && styles3Items,
    items.length === 4 && styles4Items,
    items.length === 5 && styles5Items,
    items.length === 6 && styles6Items,
    removeEnclosingIsland && '!p-0',
  )
  const iconClassName = clsx(
    `box-border`,
    `flex items-center justify-center cursor-pointer`,
    `rounded overflow-hidden`,
    `!aspect-square`,
    thumbnailClassName,
  )

  if (backgroundColor.indexOf('#') === -1) {
    backgroundColor = `#${backgroundColor}`
  }
  if (thumbnailsBackgroundColor.indexOf('#') === -1) {
    thumbnailsBackgroundColor = `#${thumbnailsBackgroundColor}`
  }
  return (
    <div
      className={clsx('absolute p-[10px]', rootClassName)}
      style={{
        width: 'calc(100% - 10px)',
        bottom: '0',
        zIndex: '2',
        margin: '0 5px 5px 5px',
        background: 'transparent',
      }}
    >
      <div
        className={gridClassName}
        style={{
          backgroundColor: removeEnclosingIsland ? 'transparent' : backgroundColor,
        }}
      >
        {items.map(image => (
          <div
            key={image.url}
            style={{
              backgroundColor: thumbnailsBackgroundColor,
              padding: `${thumbnailsPadding}px`,
              borderRadius: `${thumbnailsBorderRadius}px`,
            }}
          >
            <div
              className={iconClassName}
              onClick={image.callBack ? image.callBack : null}
              style={{
                background: `url(${image.url}) no-repeat center center`,
                backgroundSize: 'contain',
                borderRadius: `${thumbnailsBorderRadius - 3}px`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThumbnailsIsland
