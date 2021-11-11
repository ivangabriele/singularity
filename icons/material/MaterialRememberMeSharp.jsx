import React from 'react'

import Icon from '../Icon'

const MaterialRememberMeSharpSvg = props => (
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
        <path d="M19,1H5v22h14V1z M17,15.21C15.5,14.44,13.8,14,12,14s-3.5,0.44-5,1.21V6h10V15.21z" />
        <circle cx="12" cy="10" r="3" />
      </g>
    </g>
  </svg>
)

const MaterialRememberMeSharp = props => <Icon as={MaterialRememberMeSharpSvg} {...props} />

MaterialRememberMeSharp.defaultProps = { ...Icon.defaultProps }

MaterialRememberMeSharp.propTypes = { ...Icon.propTypes }

export default MaterialRememberMeSharp
