import React from 'react'

import Icon from '../Icon'

const MaterialFitScreenSharpSvg = props => (
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
      <path d="M17,4h5v5h-2V6h-3V4z M4,9V6h3V4H2v5H4z M20,15v3h-3v2h5v-5H20z M7,18H4v-3H2v5h5V18z M18,8H6v8h12V8z" />
    </g>
  </svg>
)

const MaterialFitScreenSharp = props => <Icon as={MaterialFitScreenSharpSvg} {...props} />

MaterialFitScreenSharp.defaultProps = { ...Icon.defaultProps }

MaterialFitScreenSharp.propTypes = { ...Icon.propTypes }

export default MaterialFitScreenSharp