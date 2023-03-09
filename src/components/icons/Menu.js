import React from 'react'

function Menu(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || 20}
      height={height || 15}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H19C19.5523 0.5 20 0.947715 20 1.5C20 2.05228 19.5523 2.5 19 2.5H1C0.447716 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H19C19.5523 6.5 20 6.94772 20 7.5C20 8.05228 19.5523 8.5 19 8.5H1C0.447716 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447716 14.5 1 14.5H19C19.5523 14.5 20 14.0523 20 13.5C20 12.9477 19.5523 12.5 19 12.5H1Z"
        fill={color || '#1f4d25'}
      />
    </svg>
  )
}

export default Menu
