import React from 'react'

function TriangleDown({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      className="chevron-down"
      {...props}
    >
      <path d="M8.937 1.61c.235-.211.235-.563.024-.797C8.75.578 8.398.578 8.164.789l-3.187 3-3.165-3c-.234-.21-.585-.21-.796.024-.211.234-.211.586.023.796l3.563 3.375c.117.094.257.141.375.141.14 0 .28-.047.398-.14l3.562-3.376z"></path>
    </svg>
  )
}

export default TriangleDown
