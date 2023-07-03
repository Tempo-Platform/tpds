import React from 'react'

function Play({ ...props }) {
  return (
    <svg
      viewBox="0 0 11 13"
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="13"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.938 5.028L1.688.153C1.007-.245 0 .153 0 1.114v9.75c0 .89.938 1.43 1.688.985l8.25-4.875a1.14 1.14 0 000-1.946z"
      ></path>
    </svg>
  )
}

export default Play
