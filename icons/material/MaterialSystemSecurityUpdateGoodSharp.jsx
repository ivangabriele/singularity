import React from 'react'

import Icon from '../Icon'

const MaterialSystemSecurityUpdateGoodSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M5,1v22h14V1H5z M17,18H7V6h10V18z M16,10.05l-1.41-1.41l-3.54,3.54l-1.41-1.41l-1.41,1.41L11.05,15L16,10.05z" />
    </g>
  </svg>
)

const MaterialSystemSecurityUpdateGoodSharp = props => <Icon as={MaterialSystemSecurityUpdateGoodSharpSvg} {...props} />

MaterialSystemSecurityUpdateGoodSharp.defaultProps = { ...Icon.defaultProps }

MaterialSystemSecurityUpdateGoodSharp.propTypes = { ...Icon.propTypes }

export default MaterialSystemSecurityUpdateGoodSharp
