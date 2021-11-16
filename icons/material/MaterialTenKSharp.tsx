import React from 'react'

import Icon from '../Icon'

const MaterialTenKSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M10,10.5h1.5v3H10V10.5z M21,3H3v18h18V3z M7.5,15H6v-4.5H4.5V9h3V15z M13,9v6H8.5V9H13z M19,15h-1.75l-1.75-2.25V15H14V9 h1.5v2.25L17.25,9H19l-2.25,3L19,15z" />
    </g>
  </svg>
)

const MaterialTenKSharp = props => <Icon as={MaterialTenKSharpSvg} {...props} />

MaterialTenKSharp.defaultProps = { ...Icon.defaultProps }

MaterialTenKSharp.propTypes = { ...Icon.propTypes }

export default MaterialTenKSharp