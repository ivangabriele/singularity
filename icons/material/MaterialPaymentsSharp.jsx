import React from 'react'

import Icon from '../Icon'

const MaterialPaymentsSharpSvg = props => (
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
      <path d="M23,7v13H4v-2h17V7H23z M19,16H1V4h18V16z M13,10c0-1.66-1.34-3-3-3s-3,1.34-3,3s1.34,3,3,3S13,11.66,13,10z" />
    </g>
  </svg>
)

const MaterialPaymentsSharp = props => <Icon as={MaterialPaymentsSharpSvg} {...props} />

MaterialPaymentsSharp.defaultProps = { ...Icon.defaultProps }

MaterialPaymentsSharp.propTypes = { ...Icon.propTypes }

export default MaterialPaymentsSharp
