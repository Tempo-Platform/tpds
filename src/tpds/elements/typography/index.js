import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const baseStyles = 'text-primary m-0'

const calculateFinalClass = (defaultClass, props) => {
  const finalClass = twMerge(clsx(
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
  ))
  return finalClass
}
const pNanoClass = 'text-xxs xl:text-xs'
const pTinyClass = 'text-xs xl:text-sm'
const pSmallClass = 'text-sm xl:text-base'
const pClass = 'text-base xl:text-lg'
const pLargeClass = 'text-lg xl:text-xl'
const h6Class = 'text-base md:text-lg lg:text-xl xl:text-2xl tracking-normal leading-tight'
const h5Class = 'text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-normal leading-tight'
const h4Class = 'text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-normal leading-tight'
const h3Class = 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight'
const h2Class = 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight'
const h1Class = 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight'

export const PNano = props => {
  const finalClass = calculateFinalClass(pNanoClass, props)
  return (
    <p className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const PTiny = props => {
  const finalClass = calculateFinalClass(pTinyClass, props)
  return (
    <p className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const PSmall = props => {
  const finalClass = calculateFinalClass(pSmallClass, props)
  return (
    <p className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const P = props => {
  const finalClass = calculateFinalClass(pClass, props)
  return (
    <p className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const PLarge = props => {
  const finalClass = calculateFinalClass(pLargeClass, props)
  return (
    <p className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </p>
  )
}

export const H6 = props => {
  const finalClass = calculateFinalClass(h6Class, props)
  return (
    <h6 className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h6>
  )
}

export const H5 = props => {
  const finalClass = calculateFinalClass(h5Class, props)
  return (
    <h5 className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h5>
  )
}

export const H4 = props => {
  const finalClass = calculateFinalClass(h4Class, props)
  return (
    <h4 className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h4>
  )
}

export const H3 = props => {
  const finalClass = calculateFinalClass(h3Class, props)
  return (
    <h3 className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h3>
  )
}

export const H2 = props => {
  const finalClass = calculateFinalClass(h2Class, props)
  return (
    <h2 className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h2>
  )
}

export const H1 = props => {
  const finalClass = calculateFinalClass(h1Class, props)
  return (
    <h1 className={finalClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </h1>
  )
}

// // helpers

export const AccentColor = props => {
  const finalClass = calculateFinalClass('!text-blue', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Bold = props => {
  const finalClass = calculateFinalClass('!font-bold', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Medium = props => {
  const finalClass = calculateFinalClass('!font-medium', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Underline = props => {
  const finalClass = calculateFinalClass('!underline', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Red = props => {
  const finalClass = calculateFinalClass('!text-red', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Blue = props => {
  const finalClass = calculateFinalClass('!text-blue', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Green = props => {
  const finalClass = calculateFinalClass('!text-green', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Orange = props => {
  const finalClass = calculateFinalClass('!text-orange', props)
  return (
    <span className={finalClass} style={props.style}>
      {props.children}
    </span>
  )
}

export const Code = props => {
  const finalClass = calculateFinalClass('font-mono font-bold', props)
  return <span className={finalClass}>{props.children}</span>
}

// // form labels

export const FormLabelNano = props => {
  const finalClass = clsx(
    pNanoClass,
    'font-label text-tertiary font-medium leading-none',
    props.className,
  )
  return <p className={finalClass}>{props.children}</p>
}

export const FormLabelTiny = props => {
  const finalClass = clsx(
    pTinyClass,
    'font-label text-tertiary font-medium leading-none',
    props.className,
  )
  return <p className={finalClass}>{props.children}</p>
}

export const FormLabelSmall = props => {
  const finalClass = clsx(
    pSmallClass,
    'font-label text-tertiary font-medium leading-none',
    props.className,
  )
  return <p className={finalClass}>{props.children}</p>
}

export const FormLabel = props => {
  const finalClass = clsx(
    pClass,
    'font-label text-tertiary font-medium leading-none',
    props.className,
  )
  return <p className={finalClass}>{props.children}</p>
}
