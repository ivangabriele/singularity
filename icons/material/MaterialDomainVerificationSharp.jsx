import React from 'react'

import Icon from '../Icon'

const MaterialDomainVerificationSharpSvg = props => (
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
        <polygon points="16.6,10.88 15.18,9.46 10.94,13.71 8.82,11.58 7.4,13 10.94,16.54" />
        <path d="M3,4v16h18V4H3z M19,18H5V8h14V18z" />
      </g>
    </g>
  </svg>
)

const MaterialDomainVerificationSharp = props => <Icon as={MaterialDomainVerificationSharpSvg} {...props} />

MaterialDomainVerificationSharp.defaultProps = { ...Icon.defaultProps }

MaterialDomainVerificationSharp.propTypes = { ...Icon.propTypes }

export default MaterialDomainVerificationSharp
