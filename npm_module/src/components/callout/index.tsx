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

const rootStyles = {
  default:
    'border-grey-light-scale-400 dark:border-grey-dark-scale-200 bg-grey-light-scale-200 dark:bg-grey-light-scale-100/5',
  success: 'border-green/50 bg-green-scale-100/20 dark:bg-green-scale-500/5',
  info: 'border-blue/50 bg-blue-scale-100/20 dark:bg-blue-scale-300/5',
  danger: 'border-red/50 bg-red-scale-100/20 dark:bg-red-scale-300/5',
  warning: 'border-orange/50 bg-orange-scale-100/20 dark:bg-orange-scale-300/5',
  tip: 'border-purple/50 bg-purple-scale-100/20 dark:bg-purple-scale-300/5',
  bug: 'border-orange/50 bg-orange-scale-100/20 dark:bg-orange-scale-300/5',
  note: 'border-grey-light-scale-400 dark:border-grey-dark-scale-200 bg-grey-light-scale-200 dark:bg-grey-light-scale-100/5',
}

const headerBaseStyle = 'flex items-center font-medium text-lg pt-4 px-4'

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
  ...props
}: {
  variant?: string
  title?: string
  text?: string | React.ReactNode
  omitIcon?: boolean
  customIcon?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <div {...props} className={clsx('border rounded-lg', rootStyles[variant as keyof typeof rootStyles])}>
      <div className={clsx(headerBaseStyle)}>
        {!customIcon && !omitIcon && variant !== 'default' && <span className='mr-2'>{getIcon(variant)}</span>}
        {customIcon && !omitIcon && <span className='mr-2'>{customIcon}</span>}
        {title && (
          <P isMedium className={clsx(headerVariantStyles[variant as keyof typeof headerVariantStyles])}>
            {title}
          </P>
        )}
      </div>
      <div className='px-4 pb-4 pt-2'>
        {text && <PSmall isMedium>{text}</PSmall>}
        {children}
      </div>
    </div>
  )
}

export default Callout