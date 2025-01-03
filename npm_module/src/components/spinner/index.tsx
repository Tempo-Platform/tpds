import React from 'react'
import tokens from '../../tokens'
import clsx from 'clsx'
const colorPalettes = tokens.colors.color_palettes

const processColor = (color: string) => {
  // make it easy to use TPDS color defaults
  switch (color) {
    case 'red':
      return colorPalettes.red[500]
    case 'blue':
      return colorPalettes.blue[500]
    case 'green':
      return colorPalettes.green[500]
    case 'orange':
      return colorPalettes.orange[500]
    case 'purple':
      return colorPalettes.purple[500]
    case 'yellow':
      return colorPalettes.yellow[500]
    case 'magenta':
      return colorPalettes.yellow[500]
    default:
      return color
  }
}

function Spinner({
  color,
  radius,
  duration,
  strokeWidth = '3',
  className,
  ...props
}: {
  color?: string
  radius?: number
  duration?: number
  strokeWidth?: string
  className?: string
}) {
  if (!color) color = 'currentColor'
  color = processColor(color)
  if (color === 'currentColor') color = 'text-primary'
  return (
    <svg
      {...props}
      className={clsx('tpds-spinner', className)}
      viewBox='0 0 42 42'
      style={{
        animationDuration: `${duration ? duration : 900}ms`,
        width: `${radius ? radius : 40}px`,
        height: `${radius ? radius : 40}px`,
      }}
    >
      <g fill='none' transform='translate(3 3)' strokeWidth={strokeWidth}>
        <circle className='stroke-grey-light-scale-400/50 dark:stroke-grey-dark-scale-300/50' cx='18' cy='18' r='18' />
        <path
          className='stroke-current text-primary'
          style={{ color: color }}
          stroke='currentColor'
          d='M36 18c0-9.94-8.06-18-18-18'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export default Spinner
