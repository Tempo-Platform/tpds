import React from 'react'
import clsx from 'clsx'

const Tag = ({
  label = '',
  isUppercase = false,
  addHoverEffect = false,
  variant = 'default',
  ...props
}) => {
  console.log('props.className', props.className)

  const finalRootClass = clsx(
    props.className ? props.className : '',
    'border inline-flex rounded py-0.5 px-1.5 select-none flex justify-center',
    addHoverEffect && 'cursor-pointer',
    addHoverEffect ? tagVariantsWithHover[variant] : tagRootVariantStyles[variant],
  )
  const finalLabelClass = clsx(
    'text-[11px] font-bold',
    isUppercase && 'uppercase',
    addHoverEffect ? tagLabelVariantsWithHover[variant] : tagLabelVariantStyles[variant],
  )

  console.log('finalRootClass', finalRootClass)
  console.log('finalLabelClass', finalLabelClass)
  return (
    <div className={finalRootClass}>
      <p className={finalLabelClass}>{label}</p>
    </div>
  )
}

export default Tag

const defaultStyle = ['border-grey-light-scale-600']
const infoStyle = ['border-blue']
const successStyle = ['border-green']
const dangerStyle = ['border-red']
const warningStyle = ['border-orange']

const defaultStyleWithHover = [`border-grey-light-scale-600 hover:bg-grey-light-scale-600`]
const infoStyleWithHover = [`border-blue hover:bg-blue`]
const successStyleWithHover = [`border-green hover:bg-green`]
const dangerStyleWithHover = [`border-red hover:bg`]
const warningStyleWithHover = [`border-orange hover:bg-orange`]

const defaultLabelStyle = [`text-grey-light-scale-600`]
const infoLabelStyle = [`text-blue`]
const successLabelStyle = [`text-green`]
const dangerLabelStyle = [`text-red`]
const warningLabelStyle = [`text-orange`]

const defaultLabelStyleWithHover = [
  `text-grey-light-scale-600 hover:text-white hover:dark:text-black`,
]
const infoLabelStyleWithHover = [`text-blue hover:text-white hover:dark:text-black`]
const successLabelStyleWithHover = [`text-green hover:text-white hover:dark:text-black`]
const dangerLabelStyleWithHover = [`text-red hover:text-white hover:dark:text-black`]
const warningLabelStyleWithHover = [`text-orange hover:text-white hover:dark:text-black`]

const tagRootVariantStyles = {
  default: defaultStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle,
}

const tagLabelVariantStyles = {
  default: defaultLabelStyle,
  info: infoLabelStyle,
  success: successLabelStyle,
  danger: dangerLabelStyle,
  warning: warningLabelStyle,
}

const tagVariantsWithHover = {
  default: defaultStyleWithHover,
  info: infoStyleWithHover,
  success: successStyleWithHover,
  danger: dangerStyleWithHover,
  warning: warningStyleWithHover,
}

const tagLabelVariantsWithHover = {
  default: defaultLabelStyleWithHover,
  info: infoLabelStyleWithHover,
  success: successLabelStyleWithHover,
  danger: dangerLabelStyleWithHover,
  warning: warningLabelStyleWithHover,
}
