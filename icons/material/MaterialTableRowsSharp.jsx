import React from 'react'

import Icon from '../Icon'

const MaterialTableRowsSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z" />
  </svg>
)

const MaterialTableRowsSharp = props => <Icon as={MaterialTableRowsSharpSvg} {...props} />

MaterialTableRowsSharp.defaultProps = { ...Icon.defaultProps }

MaterialTableRowsSharp.propTypes = { ...Icon.propTypes }

export default MaterialTableRowsSharp
