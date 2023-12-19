import React from 'react'
import clsx from 'clsx'

export const baseInputStyles = [
  'flex w-full',
  'transition duration-100',
  'px-2.5 py-1 rounded focus:outline-none',
  'font-normal',
  'bg-input',
  'border-transparent',
  'text-primary',
  'border-2 focus:border-blue',
]

export const outlineStyles = [
  'bg-transparent !border-[#ededed] focus:!border-blue dark:!border-[#384147] dark:focus:!border-blue',
]

export const TextInput = ({ isValid, isInvalid, isWarning, outlineStyle, className, ...props }) => {
  const finalClass = clsx(
    ...baseInputStyles,
    outlineStyle && outlineStyles,
    className,
    isValid && '!border-green focus:!border-green dark:!border-green dark:focus:!border-green',
    isInvalid && '!border-red focus:!border-red dark:!border-red dark:focus:!border-red',
    isWarning &&
      '!border-orange focus:!border-orange dark:!border-orange dark:focus:!border-orange',
  )
  return <input type="text" className={finalClass} {...props} />
}
