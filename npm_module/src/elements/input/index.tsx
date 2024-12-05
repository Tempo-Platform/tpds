import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const baseInputStyles = [
  'flex w-full',
  'transition duration-400',
  'px-2.5 rounded-[6px] !outline-none',
  '!h-[38px] text-[13px]',
  'border',
  'font-medium text-primary',
  'leading-none',
  'focus:border-blue dark:focus:border-blue',
]
export const colorInputStyles = [
  'bg-grey-light-scale-200 border-grey-light-scale-400 placeholder:text-black/40',
  'dark:bg-grey-dark-scale-600 dark:border-grey-dark-scale-400 dark:placeholder:text-white/50',
]
export const lightInputStyles = ['!bg-grey-light-scale-200 !border-grey-light-scale-400']

export const TextInput = ({
  value,
  defaultValue,
  isValid,
  isInvalid,
  isWarning,
  outlineStyle,
  className,
  forceLightMode,
  onChange,
  onInput,
  onBlur,
  onKeyDown,
  onFocus,
  placeholder,
  style,
  type,
  step,
  ...props
}: {
  value?: string
  defaultValue?: string
  isValid?: boolean
  isInvalid?: boolean
  isWarning?: boolean
  outlineStyle?: string
  className?: string
  type?: string
  step?: number
  style?: React.CSSProperties
  forceLightMode?: boolean
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
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
      isWarning && '!border-orange focus:!border-orange dark:!border-orange dark:focus:!border-orange',
    ),
  )
  return (
    <input
      type={type || 'text'}
      step={step}
      className={finalClass}
      style={style}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onInput={onInput}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      {...props}
    />
  )
}
