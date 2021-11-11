import React from 'react'

import Icon from '../Icon'

const MaterialFiveKSharpSvg = props => (
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
      <path d="M21,3H3v18h18V3z M11,10.5H8v1h3V15H6.5v-1.5h3v-1h-3V9H11V10.5z M18,15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25,9H18 l-2.25,3L18,15z" />
    </g>
  </svg>
)

const MaterialFiveKSharp = props => <Icon as={MaterialFiveKSharpSvg} {...props} />

MaterialFiveKSharp.defaultProps = { ...Icon.defaultProps }

MaterialFiveKSharp.propTypes = { ...Icon.propTypes }

export default MaterialFiveKSharp
