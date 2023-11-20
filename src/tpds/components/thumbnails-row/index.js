import React from 'react'
import clsx from 'clsx'

function ThumbnailsRow({ images, objectFit = 'contain', ...props }) {
  const gridClassName = clsx(
    `w-full h-auto rounded-lg p-2`,
    `grid grid-cols-4 gap-2`,
    `bg-grey-dark-scale-600/10`,
  )
  const iconClassName = clsx(
    `flex items-center justify-center cursor-pointer`,
    `!bg-grey-dark-scale-600/20 box-border`,
    `w-full aspect-square`,
    `rounded overflow-hidden`,
  )
  return (
    <div className={gridClassName} {...props}>
      {images.map(image => (
        <div
          key={image.url}
          className={iconClassName}
          onClick={image.callBack ? image.callBack : null}
          style={{
            background: `url(${image.url}) no-repeat center center`,
            backgroundSize: objectFit,
          }}
        />
      ))}
    </div>
  )
}

export default ThumbnailsRow
