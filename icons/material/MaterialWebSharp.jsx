import React from 'react'

import Icon from '../Icon'

const MaterialWebSharpSvg = props => (
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
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M22,4H2v16h20V4z M4,9h10.5v3.5H4V9z M4,14.5h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z" />
    </g>
  </svg>
)

const MaterialWebSharp = props => <Icon as={MaterialWebSharpSvg} {...props} />

MaterialWebSharp.defaultProps = { ...Icon.defaultProps }

MaterialWebSharp.propTypes = { ...Icon.propTypes }

export default MaterialWebSharp
