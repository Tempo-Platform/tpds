import tw, { styled } from 'twin.macro'
import React from 'react'

function Checkbox({ active, partial = false, disabled = false, ...props }) {
  return (
    <CheckboxRoot
      active={active}
      disabled={disabled}
      className={active ? 'is-active' : 'is-off'}
      {...props}
    >
      {active && !partial && <CheckIcon style={{ color: 'white' }} />}
      {active && partial && <MinusIcon style={{ color: 'white' }} />}
    </CheckboxRoot>
  )
}

const CheckboxRoot = styled.div(({ active, disabled }) => [
  tw`relative transition duration-150`,
  tw`cursor-pointer h-[18px] w-[18px] rounded flex justify-center! items-center!`,
  tw`relative border-2 border-body hover:border-blue`,
  tw`bg-white dark:bg-grey-dark-scale-500`,
  tw`border-grey-light-scale-500 dark:border-grey-dark-scale-500`,
  tw`hover:(bg-blue/5 border-2 border-blue)`,
  tw`active:(bg-blue/10 border-2 border-blue/50)`,
  active && [
    tw`bg-blue border-blue`,
    tw`hover:(bg-blue-scale-600 border-blue-scale-600)`,
    tw`active:(bg-blue-scale-700 border-blue-scale-700)`,
  ],
  disabled && [tw`pointer-events-none opacity-30`],
])

function CheckIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="8"
      fill="transparent"
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
      fill="red"
      viewBox="0 0 10 10"
    >
      <rect fill="white" y="4" width="10" height="2" />
    </svg>
  )
}

export default Checkbox
