import React from 'react'

import Icon from '../Icon'

const MaterialSecurityUpdateWarningSharpSvg = props => (
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
      <g>
        <rect height="2" width="2" x="11" y="15" />
        <rect height="6" width="2" x="11" y="7" />
        <path d="M5.01,1v22H19V1H5.01z M17,18H7V6h10V18z" />
      </g>
    </g>
  </svg>
)

const MaterialSecurityUpdateWarningSharp = props => <Icon as={MaterialSecurityUpdateWarningSharpSvg} {...props} />

MaterialSecurityUpdateWarningSharp.defaultProps = { ...Icon.defaultProps }

MaterialSecurityUpdateWarningSharp.propTypes = { ...Icon.propTypes }

export default MaterialSecurityUpdateWarningSharp
