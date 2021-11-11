import React from 'react'

import Icon from '../Icon'

const MaterialAirplaySharpSvg = props => (
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
      <path d="M6,22h12l-6-6L6,22z M23,3H1v16h6v-2H3V5h18v12h-4v2h6V3z" />
    </g>
  </svg>
)

const MaterialAirplaySharp = props => <Icon as={MaterialAirplaySharpSvg} {...props} />

MaterialAirplaySharp.defaultProps = { ...Icon.defaultProps }

MaterialAirplaySharp.propTypes = { ...Icon.propTypes }

export default MaterialAirplaySharp
