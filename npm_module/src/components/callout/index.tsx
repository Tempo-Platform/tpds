import React from 'react'
import clsx from 'clsx'
import { CheckIcon } from '../../assets/svgs/notifications'
import { WarningIcon } from '../../assets/svgs/notifications'
import { ErrorIcon } from '../../assets/svgs/notifications'
import { InfoIcon } from '../../assets/svgs/notifications'
import { TipIcon } from '../../assets/svgs/notifications'
import { BugIcon } from '../../assets/svgs/notifications'
import { NoteIcon } from '../../assets/svgs/notifications'
import { P, PSmall } from '../../elements/typography'

const baseStyle = 'bg-zinc-50 dark:!bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 rounded-lg py-4 px-6'

const headerBaseStyle = 'flex items-center font-medium text-lg'

const headerVariantStyles = {
  default: '!text-grey-dark-scale-700 dark:!text-grey-light-scale-500',
  success: '!text-green dark:!text-green',
  info: '!text-blue dark:!text-blue',
  danger: '!text-red dark:!text-red',
  warning: '!text-orange dark:!text-orange',
  tip: '!text-purple dark:!text-purple',
  bug: '!text-orange dark:!text-orange',
  note: '!text-grey-dark-scale-700 dark:!text-white',
}

const getIcon = (variant: string) => {
  switch (variant) {
    case 'success':
      return <CheckIcon />
    case 'info':
      return <InfoIcon />
    case 'danger':
      return <ErrorIcon />
    case 'warning':
      return <WarningIcon />
    case 'tip':
      return <TipIcon />
    case 'bug':
      return <BugIcon />
    case 'note':
      return <NoteIcon />
    default:
      return null
  }
}

const Callout = ({
  variant = 'default',
  title,
  text,
  omitIcon = false,
  customIcon,
  children,
  customBgClass,
  ...props
}: {
  variant?: string
  title?: string
  text?: string | React.ReactNode
  omitIcon?: boolean
  customIcon?: React.ReactNode
  children?: React.ReactNode
  customBgClass?: string
}) => {
  return (
    <div {...props} className={clsx(baseStyle, customBgClass)}>
      <div className={clsx(headerBaseStyle)}>
        {!customIcon && !omitIcon && variant !== 'default' && <span className='mr-2'>{getIcon(variant)}</span>}
        {customIcon && !omitIcon && <span className='mr-2'>{customIcon}</span>}
        {title && (
          <P isMedium className={clsx(headerVariantStyles[variant as keyof typeof headerVariantStyles])}>
            {title}
          </P>
        )}
      </div>
      <div className='mt-2'>
        {text && <PSmall isMedium className='!text-zinc-500 dark:!text-zinc-400'>{text}</PSmall>}
        {children}
      </div>
    </div>
  )
}

export default Callout
