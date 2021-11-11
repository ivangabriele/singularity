import React from 'react'

import Icon from '../Icon'

const MaterialBrowserNotSupportedSharpSvg = props => (
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
      <g>
        <polygon points="19,6 19,16.5 21,18.5 21,4 6.5,4 8.5,6" />
        <path d="M3.22,3.32L1.95,4.59L3,5.64L3,20h14.36l2.06,2.06l1.27-1.27L3.22,3.32z M15,18H5V7.64L15.36,18H15z" />
      </g>
    </g>
  </svg>
)

const MaterialBrowserNotSupportedSharp = props => <Icon as={MaterialBrowserNotSupportedSharpSvg} {...props} />

MaterialBrowserNotSupportedSharp.defaultProps = { ...Icon.defaultProps }

MaterialBrowserNotSupportedSharp.propTypes = { ...Icon.propTypes }

export default MaterialBrowserNotSupportedSharp
