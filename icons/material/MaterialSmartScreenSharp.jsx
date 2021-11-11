import React from 'react'

import Icon from '../Icon'

const MaterialSmartScreenSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <g>
        <path d="M1,5v14h22V5H1z M18,17H6V7h12V17z" />
        <rect height="1.5" width="1.5" x="12.5" y="11.25" />
        <rect height="1.5" width="1.5" x="15" y="11.25" />
        <rect height="1.5" width="1.5" x="10" y="11.25" />
        <rect height="1.5" width="1.5" x="7.5" y="11.25" />
      </g>
    </g>
  </svg>
)

const MaterialSmartScreenSharp = props => <Icon as={MaterialSmartScreenSharpSvg} {...props} />

MaterialSmartScreenSharp.defaultProps = { ...Icon.defaultProps }

MaterialSmartScreenSharp.propTypes = { ...Icon.propTypes }

export default MaterialSmartScreenSharp
