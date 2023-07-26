import React from 'react'

function MinusIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="currentColor"
      {...props}
    >
      <path fill="currentColor" d="M0 0H44V44H0z" opacity="0.0001" />
      <path fill="currentColor" d="M14 21H30V23H14z" />
    </svg>
  )
}

export default MinusIcon
