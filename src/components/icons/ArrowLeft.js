import React from 'react'

function ArrowLeft(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12H5"
        stroke={color || '#6C6C6C'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19L5 12L12 5"
        stroke={color || '#6C6C6C'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeft
