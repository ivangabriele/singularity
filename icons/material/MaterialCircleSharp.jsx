import React from 'react'

import Icon from '../Icon'

const MaterialCircleSharpSvg = props => (
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
        <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z" />
      </g>
    </g>
  </svg>
)

const MaterialCircleSharp = props => <Icon as={MaterialCircleSharpSvg} {...props} />

MaterialCircleSharp.defaultProps = { ...Icon.defaultProps }

MaterialCircleSharp.propTypes = { ...Icon.propTypes }

export default MaterialCircleSharp
