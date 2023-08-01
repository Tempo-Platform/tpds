import React from 'react';
import clsx from 'clsx';
import CheckIcon from '../../assets/svgs/notifications/CheckIcon';
import WarningIcon from '../../assets/svgs/notifications/WarningIcon';
import ErrorIcon from '../../assets/svgs/notifications/ErrorIcon';
import InfoIcon from '../../assets/svgs/notifications/InfoIcon';
import TipIcon from '../../assets/svgs/notifications/TipIcon';
import BugIcon from '../../assets/svgs/notifications/BugIcon';
import NoteIcon from '../../assets/svgs/notifications/NoteIcon';
const rootStyles = {
  default: 'border-grey-light-scale-400 bg-grey-light-scale-200 dark:bg-grey-light-scale-100/5',
  success: 'border-green-scale-100 bg-green-scale-100/20 dark:border-green-scale-300 dark:bg-green-scale-500/10',
  info: 'border-blue-scale-100 bg-blue-scale-100/20 dark:border-blue-scale-300 dark:bg-blue-scale-300/10',
  danger: 'border-red-scale-100 bg-red-scale-100/20 dark:border-red-scale-300 dark:bg-red-scale-300/10',
  warning: 'border-orange-scale-100 bg-orange-scale-100/20 dark:border-orange-scale-300 dark:bg-orange-scale-300/10',
  tip: 'border-purple-scale-100 bg-purple-scale-100/20 dark:border-purple-scale-300 dark:bg-purple-scale-300/10',
  bug: 'border-orange-scale-100 bg-orange-scale-100/20 dark:border-orange-scale-300 dark:bg-orange-scale-300/10',
  note: 'border-grey-light-scale-400 bg-grey-light-scale-400/20 dark:bg-grey-light-scale-100/5'
};
const headerBaseStyle = 'flex items-center font-medium text-lg pt-4 px-4';
const headerVariantStyles = {
  default: 'text-grey-dark-scale-700 dark:text-grey-light-scale-500',
  success: 'text-green-scale-500 dark:text-green-scale-400',
  info: 'text-blue-scale-500 dark:text-blue-scale-300',
  danger: 'text-red-scale-500 dark:text-red-scale-400',
  warning: 'text-orange-scale-500 dark:text-orange-scale-400',
  tip: 'text-purple-scale-500 dark:text-purple-scale-100',
  bug: 'text-orange-scale-500 dark:text-orange-scale-400',
  note: 'text-grey-dark-scale-700 dark:text-white'
};
const getIcon = variant => {
  switch (variant) {
    case 'success':
      return <CheckIcon />;
    case 'info':
      return <InfoIcon />;
    case 'danger':
      return <ErrorIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'tip':
      return <TipIcon />;
    case 'bug':
      return <BugIcon />;
    case 'note':
      return <NoteIcon />;
    default:
      return null;
  }
};
const Callout = ({
  variant = 'default',
  title,
  text,
  ...props
}) => {
  return <div {...props} className={rootStyles[variant]}>
      <div className={clsx(headerBaseStyle, headerVariantStyles[variant])}>
        {variant !== 'default' && <span className="mr-2">{getIcon(variant)}</span>}
        {title}
      </div>
      <div className="font-medium text-grey-dark-scale-200 dark:text-white px-4 pb-4 pt-2">
        {text}
      </div>
    </div>;
};
export default Callout;