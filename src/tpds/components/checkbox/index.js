import React from 'react'
import clsx from 'clsx'

function Checkbox({ active, partial = false, disabled = false, ...props }) {
  const finalRootClassName = clsx(
    'tpds-checkbox',
    active ? 'is-active' : 'is-off',
    `relative transition duration-150`,
    `cursor-pointer h-[20px] w-[20px] rounded flex !justify-center !items-center`,
    `relative border-2 border-body hover:border-blue`,
    `bg-white dark:bg-grey-dark-scale-100`,
    `border-grey-light-scale-500 dark:border-grey-dark-scale-50`,
    `hover:bg-blue/5 hover:border-2 border-blue`,
    `active:bg-blue/10 active:border-2 active:border-blue/50`,
    active && [
      `bg-blue border-blue`,
      `hover:bg-blue-scale-600 hover:border-blue-scale-600`,
      `active:bg-blue-scale-700 active:border-blue-scale-700`,
    ],
    disabled && [`pointer-events-none opacity-30`],
  )

  return (
    <div className={finalRootClassName} {...props}>
      {active && !partial && <CheckIcon className="text-primary" />}
      {active && partial && <MinusIcon className="text-primary" />}
    </div>
  )
}

function CheckIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="8"
      fill="currentColor"
      viewBox="0 0 8 6"
    >
      <path
        fill="currentColor"
        d="M7.25 1.266c.25-.25.25-.641 0-.891a.632.632 0 00-.875 0L2.812 3.938 1.25 2.375a.632.632 0 00-.875 0c-.25.25-.25.64 0 .89l2 2c.11.126.281.188.438.188a.617.617 0 00.437-.187l4-4z"
      ></path>
    </svg>
  )
}

function MinusIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
    >
      <rect fill="currentColor" y="4" width="10" height="2" />
    </svg>
  )
}

export default Checkbox
