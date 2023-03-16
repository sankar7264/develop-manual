import React from 'react'

function Fb(props) {
  const { color, height, width } = props
  return (
    <svg
      width={width || '10'}
      height={height || '19'}
      viewBox="0 0 10 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00844 10.7953L9.5085 7.5379H6.38269V5.42402C6.38269 4.53302 6.81919 3.66396 8.21925 3.66396H9.64013V0.890836C9.64013 0.890836 8.35087 0.670898 7.11787 0.670898C4.54387 0.670898 2.86144 2.23127 2.86144 5.05559V7.53846H0V10.7959H2.86144V18.6709H6.38269V10.7959L9.00844 10.7953Z"
        fill={color || '#FEFCF8'}
      />
    </svg>
  )
}

export default Fb
