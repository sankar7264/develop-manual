import React from 'react'

function ChevronLeft(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || 12}
      height={height || 22}
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21L1 11L11 1"
        stroke={color || '#3D3B38'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronLeft
