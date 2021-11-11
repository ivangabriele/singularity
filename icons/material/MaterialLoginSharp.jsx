import React from 'react'

import Icon from '../Icon'

const MaterialLoginSharpSvg = props => (
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
      <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h10V3H12v2h8V19z" />
    </g>
  </svg>
)

const MaterialLoginSharp = props => <Icon as={MaterialLoginSharpSvg} {...props} />

MaterialLoginSharp.defaultProps = { ...Icon.defaultProps }

MaterialLoginSharp.propTypes = { ...Icon.propTypes }

export default MaterialLoginSharp
