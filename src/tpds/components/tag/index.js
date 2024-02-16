import React from 'react'
import clsx from 'clsx'

const Tag = ({
  onClick,
  label = '',
  isUppercase = false,
  addHoverEffect = false,
  showCloseIcon = false,
  noBorder = false,
  variant = 'default',
  rootClassName = '',
  labelClassName = '',
  ...props
}) => {
  const finalRootClass = clsx(
    props.className ? props.className : '',
    'border border-2 h-[26px] inline-flex !rounded-[6px] py-1 px-2',
    'select-none justify-center items-center align-center gap-1',
    'inline-flex py-0.5 px-1.5 select-none justify-center align-center gap-1',
    rootVariantStyles[variant],
    addHoverEffect && 'cursor-pointer',
    addHoverEffect && rootVariantStylesWithHover[variant],
    noBorder && '!border-none',
    rootClassName,
  )
  const finalLabelClass = clsx(
    'text-[12px] font-medium whitespace-nowrap !text-inherit m-0',
    isUppercase && 'uppercase',
    labelClassName,
  )

  return (
    <div className={finalRootClass} onClick={onClick}>
      <p className={finalLabelClass} style={{ lineHeight: 'normal' }}>
        {label}
      </p>
      {showCloseIcon && <XIcon className={finalLabelClass} />}
    </div>
  )
}

export default Tag

const defaultStyle = ['bg-black text-white dark:bg-white dark:text-black']
const infoStyle = ['bg-blue text-white dark:text-black']
const successStyle = ['bg-green text-white dark:text-black']
const dangerStyle = ['bg-red text-white dark:text-black']
const warningStyle = ['bg-orange text-white dark:text-black']

const defaultStyleWithHover = ['hover:bg-grey-dark-scale-400 dark:hover:bg-grey-light-scale-200']
const infoStyleWithHover = ['hover:bg-blue/80']
const successStyleWithHover = ['hover:bg-green/80']
const dangerStyleWithHover = ['hover:bg-red/80']
const warningStyleWithHover = ['hover:bg-orange/80']

const rootVariantStyles = {
  default: defaultStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle,
}

const rootVariantStylesWithHover = {
  default: defaultStyleWithHover,
  info: infoStyleWithHover,
  success: successStyleWithHover,
  danger: dangerStyleWithHover,
  warning: warningStyleWithHover,
}

function XIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={clsx('w-[14px] h-[16px]', className)}
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      ></path>
    </svg>
  )
}
