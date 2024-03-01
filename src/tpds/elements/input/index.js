import React from 'react'
import clsx from 'clsx'

export const baseInputStyles = [
  'flex w-full',
  'transition duration-400',
  'px-2.5 rounded-[6px] !outline-none',
  '!h-[40px] text-[13px]',
  'border-2',
  'font-medium text-primary',
  'placeholder:text-blue leading-none',
  'placeholder-shown:bg-white dark:placeholder-shown:bg-grey-dark-scale-900',
  'bg-grey-light-scale-50 dark:bg-grey-dark-scale-700',
  'placeholder-shown:border-grey-light-scale-400 dark:placeholder-shown:border-grey-dark-scale-400',
  'border-grey-light-scale-600 dark:border-grey-dark-scale-300',
  'focus:border-blue dark:focus:border-blue',
]

export const TextInput = ({ isValid, isInvalid, isWarning, outlineStyle, className, ...props }) => {
  const finalClass = clsx(
    ...baseInputStyles,
    //outlineStyle && outlineStyles,
    className,
    isValid && '!border-green focus:!border-green dark:!border-green dark:focus:!border-green',
    isInvalid && '!border-red focus:!border-red dark:!border-red dark:focus:!border-red',
    isWarning &&
      '!border-orange focus:!border-orange dark:!border-orange dark:focus:!border-orange',
  )
  return <input type="text" className={finalClass} {...props} />
}
