import React from 'react'
import clsx from 'clsx'

const bgStyles = {
  info: 'bg-blue dark:bg-blue',
  success: 'bg-green dark:bg-green',
  warning: 'bg-orange dark:bg-orange',
  danger: 'bg-red dark:bg-red',
}

function Switch({ active = false, onClick = null, variant = 'info', disabled = false }) {
  const rootStyles = clsx(
    'h-[22px] w-[40px]',
    'transition',
    'cursor-pointer',
    'items-center rounded-full',
    'relative inline-flex',
    active ? bgStyles[variant] : `bg-grey-light-scale-500 dark:bg-grey-dark-scale-300`,
  )

  const circleStyles = clsx(
    'transition',
    'inline-block h-[16px] w-[16px] transform rounded-full bg-white',
    active ? `translate-x-[21px]` : `translate-x-[3px]`,
  )

  return (
    <div
      onClick={onClick}
      className={rootStyles}
      style={disabled ? { pointerEvents: 'none', opacity: 0.2 } : null}
    >
      <span className={circleStyles} />
    </div>
  )
}

export default Switch
