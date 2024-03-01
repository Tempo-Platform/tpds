import React from 'react'
import clsx from 'clsx'

export const Section = props => {
  const defaultClass = 'flex flex-col w-full'
  const finalClass = clsx(defaultClass, props.className)
  return (
    <div className={finalClass} style={props.style}>
      {props.children}
    </div>
  )
}

export const PageRoot = props => {
  const defaultClass = 'flex flex-col w-full min-h-screen'
  const finalClass = clsx(defaultClass, props.className)
  return (
    <div className={finalClass} style={props.style}>
      {props.children}
    </div>
  )
}

const containerVariants = {
  shortest: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 max-w-[768px]',
  short: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 max-w-[1022px]',
  large: 'px-6 sm:px-8 w-full md:px-0 md:w-[80%] xl:w-[70%] 2xl:w-[60%] 2xl:max-w-[1440px]',
  full: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 xl:w-10/12 2xl:w-full 2xl:px-30px',
}

export const Container = props => {
  const defaultClass = 'self-center mx-auto'
  const variant = props.variant || 'large'
  const finalClass = clsx(defaultClass, props.className, containerVariants[variant])
  return (
    <div className={finalClass} style={props.style}>
      {props.children}
    </div>
  )
}

export const ContainerRow = props => {
  const defaultClass = 'self-center flex-row'
  const variant = props.variant || 'large'
  const finalClass = clsx(defaultClass, props.className, containerVariants[variant])
  return (
    <div className={finalClass} style={props.style}>
      {props.children}
    </div>
  )
}

export const PaddingBox = props => {
  const defaultClass = 'py-4 md:py-8 lg:py-12 xl:py-20'
  const finalClass = clsx(defaultClass, props.className)
  return (
    <div className={finalClass} style={props.style}>
      {props.children}
    </div>
  )
}

export const Separator = props => {
  const defaultClass = 'h-[1px] w-full mt-[20px] border-b border-body'
  const finalClass = clsx(defaultClass, props.className)
  return (
    <div className={finalClass} style={props.style}>
      {props.children}
    </div>
  )
}

export const SeparatorWindow = props => {
  const defaultClass = 'h-[1px] w-full mt-[20px] border-b border-window'
  const finalClass = clsx(defaultClass, props.className)
  return (
    <div className={finalClass} style={props.style}>
      {props.children}
    </div>
  )
}

export const Window = props => {
  const finalClass = clsx(
    'bg-window border border-window',
    '!border-0 dark:!border-2',
    'shadow-lg dark:shadow-none',
    'rounded-sm lg:rounded-[8px]',
    'py-xs px-xs md:py-xs md:px-sm lg:py-sm lg:px-md',
    props.className,
  )
  return (
    <div className={finalClass} style={props.style}>
      {props.children}
    </div>
  )
}
