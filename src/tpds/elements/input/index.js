import React from 'react'
import clsx from 'clsx'

export const baseInputStyles = [
  'flex w-full',
  'transition duration-100',
  'px-2.5 py-1 rounded focus:outline-none',
  'font-normal',
  'bg-input text-primary border-transparent',
  'border-2 focus:border-blue',
]

export const TextInput = ({ isValid, isInvalid, isWarning, className, ...props }) => {
  const finalClass = clsx(
    ...baseInputStyles,
    className,
    isValid && '!border-green focus:!border-green',
    isInvalid && '!border-red focus:!border-red',
    isWarning && '!border-orange focus:!border-orange',
  )
  return <input type="text" className={finalClass} {...props} />
}
