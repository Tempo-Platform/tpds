import React from 'react'

function Calendar({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className="relative top-[-1px]"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.556 0a.889.889 0 01.882.785l.006.104v.889h1.778a1.778 1.778 0 011.774 1.644l.004.134v10.666a1.778 1.778 0 01-1.644 1.774l-.134.004H1.778a1.778 1.778 0 01-1.774-1.644L0 14.222V3.556a1.778 1.778 0 011.644-1.774l.134-.004h1.778v-.89A.889.889 0 015.327.786l.006.104v.889h5.334v-.89A.889.889 0 0111.556 0zm2.666 8H1.778v6.222h12.444V8zm0-4.444H1.778v2.666h12.444V3.556z"
      ></path>
    </svg>
  )
}

export default Calendar
