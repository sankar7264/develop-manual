import React from 'react'

function ChevronDown(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || '14'}
      height={height || 8}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke={color || '#1F4D25'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronDown
