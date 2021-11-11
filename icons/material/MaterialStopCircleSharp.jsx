import React from 'react'

import Icon from '../Icon'

const MaterialStopCircleSharpSvg = props => (
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
      <path
        d="M8,16h8V8H8V16z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z"
        fill-rule="evenodd"
      />
    </g>
  </svg>
)

const MaterialStopCircleSharp = props => <Icon as={MaterialStopCircleSharpSvg} {...props} />

MaterialStopCircleSharp.defaultProps = { ...Icon.defaultProps }

MaterialStopCircleSharp.propTypes = { ...Icon.propTypes }

export default MaterialStopCircleSharp
