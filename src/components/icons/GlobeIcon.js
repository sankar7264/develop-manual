import React from 'react'

function GlobeIcon(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || '19'}
      height={height || '19'}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 17C13.6421 17 17 13.6421 17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17Z"
        stroke={color || '#1F4D25'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9.5H17"
        stroke={color || '#1F4D25'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 2C11.376 4.05376 12.4421 6.71903 12.5 9.5C12.4421 12.281 11.376 14.9462 9.5 17C7.62404 14.9462 6.55794 12.281 6.5 9.5C6.55794 6.71903 7.62404 4.05376 9.5 2V2Z"
        stroke={color || '#1F4D25'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default GlobeIcon
