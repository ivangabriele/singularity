import React from 'react'

import Icon from '../Icon'

const MaterialSubscriptSharpSvg = props => (
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
      <path d="M20,18v1h3v1h-4v-3h3v-1h-3v-1h4v3H20z M5.88,18h2.66l3.4-5.42h0.12l3.4,5.42h2.66l-4.65-7.27L17.81,4h-2.68l-3.07,4.99 h-0.12L8.85,4H6.19l4.32,6.73L5.88,18z" />
    </g>
  </svg>
)

const MaterialSubscriptSharp = props => <Icon as={MaterialSubscriptSharpSvg} {...props} />

MaterialSubscriptSharp.defaultProps = { ...Icon.defaultProps }

MaterialSubscriptSharp.propTypes = { ...Icon.propTypes }

export default MaterialSubscriptSharp
