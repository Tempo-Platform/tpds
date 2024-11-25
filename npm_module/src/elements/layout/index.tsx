import React from 'react'
import clsx from 'clsx'

export const Section = ({
  className,
  style,
  children,
  ...props
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) => {
  const defaultClass = 'flex flex-col w-full'
  const finalClass = clsx(defaultClass, className)
  return (
    <div className={finalClass} style={style}>
      {children}
    </div>
  )
}

export const PageRoot = ({
  className,
  style,
  children,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) => {
  const defaultClass = 'flex flex-col w-full min-h-screen'
  const finalClass = clsx(defaultClass, className)
  return (
    <div className={finalClass} style={style}>
      {children}
    </div>
  )
}

const containerVariants = {
  shortest: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 max-w-[768px]',
  short: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 max-w-[1022px]',
  large: 'px-6 sm:px-8 w-full md:px-0 md:w-[80%] xl:w-[70%] 2xl:w-[60%] 2xl:max-w-[1440px]',
  full: 'px-6 sm:px-8 w-full md:px-0 md:w-11/12 xl:w-10/12 2xl:w-full 2xl:px-30px',
}

export const Container = ({
  className,
  style,
  children,
  variant = 'large',
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  variant?: string
}) => {
  const defaultClass = 'self-center mx-auto'
  const finalClass = clsx(defaultClass, className, containerVariants[variant as keyof typeof containerVariants])
  return (
    <div className={finalClass} style={style}>
      {children}
    </div>
  )
}

export const ContainerRow = ({
  className,
  style,
  children,
  variant = 'large',
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  variant?: string
}) => {
  const defaultClass = 'self-center flex-row'
  const finalClass = clsx(defaultClass, className, containerVariants[variant as keyof typeof containerVariants])
  return (
    <div className={finalClass} style={style}>
      {children}
    </div>
  )
}

export const PaddingBox = ({
  className,
  style,
  children,
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) => {
  const defaultClass = 'py-4 md:py-8 lg:py-12 xl:py-20'
  const finalClass = clsx(defaultClass, className)
  return (
    <div className={finalClass} style={style}>
      {children}
    </div>
  )
}

export const Separator = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  const defaultClass = 'h-[1px] w-full mt-[20px] border-b border-grey-light-scale-400 dark:border-grey-dark-scale-500'
  const finalClass = clsx(defaultClass, className)
  return <div className={finalClass} style={style} />
}

export const SeparatorWindow = ({
  className,
  style,
  children,
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) => {
  const defaultClass = 'h-[1px] w-full mt-[20px] border-b border-window'
  const finalClass = clsx(defaultClass, className)
  return (
    <div className={finalClass} style={style}>
      {children}
    </div>
  )
}

export const Window = ({
  className,
  style,
  children,
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) => {
  const finalClass = clsx(
    'bg-window border border-window',
    '!border-0 dark:!border-2',
    'shadow-sm dark:shadow-none',
    'rounded-sm lg:rounded-[8px]',
    'py-xs px-xs md:py-xs md:px-sm lg:py-sm lg:px-md',
    className,
  )
  return (
    <div className={finalClass} style={style}>
      {children}
    </div>
  )
}
