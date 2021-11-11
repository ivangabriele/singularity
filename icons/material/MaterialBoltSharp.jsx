import React from 'react'

import Icon from '../Icon'

const MaterialBoltSharpSvg = props => (
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
      <path d="M11,21h-1l1-7H6.74c0,0,3.68-6.46,6.26-11h1l-1,7h4.28L11,21z" />
    </g>
  </svg>
)

const MaterialBoltSharp = props => <Icon as={MaterialBoltSharpSvg} {...props} />

MaterialBoltSharp.defaultProps = { ...Icon.defaultProps }

MaterialBoltSharp.propTypes = { ...Icon.propTypes }

export default MaterialBoltSharp
