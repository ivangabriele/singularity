import React from 'react'

import Icon from '../Icon'

const MaterialInventorySharpSvg = props => (
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
        <path d="M5,5h2v3h10V5h2v5h2V3h-6.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H3v18h8v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1 s-1-0.45-1-1S11.45,3,12,3z" />
        <polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13" />
      </g>
    </g>
  </svg>
)

const MaterialInventorySharp = props => <Icon as={MaterialInventorySharpSvg} {...props} />

MaterialInventorySharp.defaultProps = { ...Icon.defaultProps }

MaterialInventorySharp.propTypes = { ...Icon.propTypes }

export default MaterialInventorySharp
