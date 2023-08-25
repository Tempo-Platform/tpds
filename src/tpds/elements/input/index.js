import React from 'react'
import clsx from 'clsx'

export const TextInput = ({ isValid, isInvalid, isWarning, className, ...props }) => {
  const finalClass = clsx(
    className,
    'flex w-full',
    'transition duration-100',
    'px-2.5 py-1 rounded focus:outline-none',
    'font-normal',
    'bg-grey-light-scale-200 text-primary border-transparent dark:bg-grey-dark-scale-300',
    'border-2 focus:border-blue',
    isValid && 'border-green focus:border-green',
    isInvalid && 'border-red focus:border-red',
    isWarning && 'border-orange focus:border-orange',
  )
  return <input type="text" className={finalClass} {...props} />
}
