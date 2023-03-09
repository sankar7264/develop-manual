import React from 'react'

function Search(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || 22}
      height={height || 30}
      viewBox="0 0 22 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0833 19.4167C14.1334 19.4167 17.4167 16.1334 17.4167 12.0833C17.4167 8.03324 14.1334 4.75 10.0833 4.75C6.03324 4.75 2.75 8.03324 2.75 12.0833C2.75 16.1334 6.03324 19.4167 10.0833 19.4167Z"
        stroke={color || '#1f4d25'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 21.2502L15.2625 17.2627"
        stroke={color || '#1f4d25'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Search
