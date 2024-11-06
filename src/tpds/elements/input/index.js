import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const baseInputStyles = [
  'flex w-full',
  'transition duration-400',
  'px-2.5 rounded-[6px] !outline-none',
  '!h-[40px] text-[13px]',
  'border-2',
  'font-medium text-primary',
  'placeholder:text-blue leading-none',
  'bg-grey-light-scale-50 dark:bg-grey-dark-scale-900',
  'border-grey-light-scale-400 dark:border-grey-dark-scale-400',
  'focus:border-blue dark:focus:border-blue',
]
export const colorInputStyles = [
  'bg-grey-light-scale-50 dark:bg-grey-dark-scale-900',
  'border-grey-light-scale-400 dark:border-grey-dark-scale-400',
]
export const lightInputStyles = ['!bg-grey-light-scale-50', '!border-grey-light-scale-400']

export const TextInput = ({
  isValid,
  isInvalid,
  isWarning,
  outlineStyle,
  className,
  forceLightMode,
  ...props
}) => {
  const colorStylesToUse = forceLightMode ? lightInputStyles : colorInputStyles
  const finalClass = twMerge(
    clsx(
      ...baseInputStyles,
      ...colorStylesToUse,
      //outlineStyle && outlineStyles,
      className,
      forceLightMode && '!text-black',
      isValid && '!border-green focus:!border-green dark:!border-green dark:focus:!border-green',
      isInvalid && '!border-red focus:!border-red dark:!border-red dark:focus:!border-red',
      isWarning &&
        '!border-orange focus:!border-orange dark:!border-orange dark:focus:!border-orange',
    ),
  )
  if(props.type){
    return <input type={props.type} className={finalClass} {...props} />
  }
  return <input type="text" className={finalClass} {...props} />
}
