import React from 'react'

function Cross(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 10L10 30"
        stroke={color || '#3D3B38'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L30 30"
        stroke={color || '#3D3B38'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Cross
