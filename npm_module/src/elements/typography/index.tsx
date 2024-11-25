import React from 'react'
import clsx from 'clsx'

const baseStyles = 'text-primary m-0'

type ExtraProps = {
  id?: string
}

type TypographElementProps = {
  id?: string
  style?: React.CSSProperties
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  isSmall?: boolean
  isUnderline?: boolean
  isUppercase?: boolean
  isItalic?: boolean
  isLight?: boolean
  isMedium?: boolean
  isBold?: boolean
  isExtraBold?: boolean
  isHeavy?: boolean
  isPulsing?: boolean
  isCentered?: boolean
  noSelect?: boolean
  isWhite?: boolean
  isGreen?: boolean
  isRed?: boolean
  isBlue?: boolean
  isOrange?: boolean
  isYellow?: boolean
  leadingNone?: boolean
  isLabel?: boolean
  forceLightMode?: boolean
}

const calculateFinalClass = (defaultClass: string, props: TypographElementProps) => {
  const finalClass = clsx(
    baseStyles,
    defaultClass,
    props.className && props.className,
    props.isSmall && '!text-sm',
    props.isUnderline && '!underline',
    props.isUppercase && '!uppercase',
    props.isItalic && '!italic',
    props.isLight && '!font-light',
    props.isMedium && '!font-medium',
    props.isBold && '!font-bold',
    props.isExtraBold && '!font-extrabold',
    props.isHeavy && '!font-black',
    props.isPulsing && '!animate-pulse',
    props.isCentered && '!text-center',
    props.noSelect && '!select-none',
    props.isWhite && '!text-white',
    props.isGreen && '!text-green',
    props.isRed && '!text-red',
    props.isBlue && '!text-blue',
    props.isOrange && '!text-orange',
    props.isYellow && '!text-yellow',
    props.leadingNone && '!leading-none',
    props.isLabel && '!select-none',
    props.isLabel && '!leading-none',
    props.isLabel && '!font-label',
    props.forceLightMode && '!text-black',
  )
  return finalClass
}
const pNanoClass = 'text-xxs md:text-xs'
const pTinyClass = 'text-xs md:text-sm'
const pSmallClass = 'text-sm md:text-base'
const pClass = 'text-base md:text-lg'
const pLargeClass = 'text-lg md:text-xl'
const h6Class = 'text-base md:text-lg lg:text-xl xl:text-2xl tracking-normal leading-tight'
const h5Class = 'text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-normal leading-tight'
const h4Class = 'text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-normal leading-tight'
const h3Class = 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight'
const h2Class = 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight'
const h1Class = 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight'

export const PNano = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(pNanoClass, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const PTiny = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(pTinyClass, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const PSmall = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(pSmallClass, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const P = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(pClass, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const PLarge = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(pLargeClass, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const H6 = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(h6Class, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <h6 {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h6>
  )
}

export const H5 = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(h5Class, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <h5 {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h5>
  )
}

export const H4 = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(h4Class, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <h4 {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h4>
  )
}

export const H3 = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(h3Class, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <h3 {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h3>
  )
}

export const H2 = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(h2Class, props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <h2 {...xprops} className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h2>
  )
}

export const H1 = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass(h1Class, props)
  return (
    <h1 className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h1>
  )
}

// // helpers

export const AccentColor = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('!text-blue', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Bold = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('!font-bold', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Medium = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('!font-medium', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Underline = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('!underline', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Red = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('!text-red', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Blue = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('!text-blue', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Green = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('!text-green', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Orange = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('!text-orange', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Code = (props: TypographElementProps) => {
  const finalClass = calculateFinalClass('font-mono font-bold', props)
  const xprops: ExtraProps = { id: props.id }
  return (
    <span {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

// // form labels

export const FormLabelNano = (props: TypographElementProps) => {
  const finalClass = clsx(pNanoClass, 'font-label text-tertiary font-medium leading-none', props.className)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const FormLabelTiny = (props: TypographElementProps) => {
  const finalClass = clsx(pTinyClass, 'font-label text-tertiary font-medium leading-none', props.className)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const FormLabelSmall = (props: TypographElementProps) => {
  const finalClass = clsx(pSmallClass, 'font-label text-tertiary font-medium leading-none', props.className)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}

export const FormLabel = (props: TypographElementProps) => {
  const finalClass = clsx(pClass, 'font-label text-tertiary font-medium leading-none', props.className)
  const xprops: ExtraProps = { id: props.id }
  return (
    <p {...xprops} className={finalClass} style={props.style}>
      {props.children}
    </p>
  )
}
