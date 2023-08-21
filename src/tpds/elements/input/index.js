import React from 'react'
import clsx from 'clsx'

export const TextInput = ({ isValid, isInvalid, isWarning, className, ...props }) => {
  const finalClass = clsx(
    className,
    'flex w-full',
    'transition duration-100',
    'px-2.5 py-1 rounded focus:outline-none',
    'font-normal',
    'bg-input text-primary border-input',
    'border-2 focus:border-blue',
    //buttonVariantStyles[variant],
    isValid && 'border-green focus:border-green',
    isInvalid && 'border-red focus:border-red',
    isWarning && 'border-orange focus:border-orange',
  )
  return <input type="text" className={finalClass} {...props} />
}
