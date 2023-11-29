import React from 'react'
import clsx from 'clsx'
import CheckIcon from '../../assets/svgs/notifications/CheckIcon'
import WarningIcon from '../../assets/svgs/notifications/WarningIcon'
import ErrorIcon from '../../assets/svgs/notifications/ErrorIcon'
import InfoIcon from '../../assets/svgs/notifications/InfoIcon'
import TipIcon from '../../assets/svgs/notifications/TipIcon'
import BugIcon from '../../assets/svgs/notifications/BugIcon'
import NoteIcon from '../../assets/svgs/notifications/NoteIcon'
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

const getIcon = variant => {
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
}) => {
  return (
    <div {...props} className={clsx('border rounded-lg', rootStyles[variant])}>
      <div className={clsx(headerBaseStyle)}>
        {!customIcon && !omitIcon && variant !== 'default' && (
          <span className="mr-2">{getIcon(variant)}</span>
        )}
        {customIcon && !omitIcon && <span className="mr-2">{customIcon}</span>}
        {title && (
          <P isMedium className={clsx(headerVariantStyles[variant])}>
            {title}
          </P>
        )}
      </div>
      <div className="px-4 pb-4 pt-2">
        {text && <PSmall isMedium>{text}</PSmall>}
        {children}
      </div>
    </div>
  )
}

export default Callout
