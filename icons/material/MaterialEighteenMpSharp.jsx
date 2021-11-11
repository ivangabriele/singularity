import React from 'react'

import Icon from '../Icon'

const MaterialEighteenMpSharpSvg = props => (
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
        <rect height="1.5" width="1.5" x="13.5" y="9" />
        <rect height="1.5" width="1.5" x="13.5" y="6.5" />
        <path d="M3,3v18h18V3H3z M12,5.5h4.5v6H12V5.5z M7,5.5h3v6H8.5V7H7V5.5z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M18,17h-3v1.5h-1.5v-6H18V17z" />
        <rect height="1.5" width="1.5" x="15" y="14" />
      </g>
    </g>
  </svg>
)

const MaterialEighteenMpSharp = props => <Icon as={MaterialEighteenMpSharpSvg} {...props} />

MaterialEighteenMpSharp.defaultProps = { ...Icon.defaultProps }

MaterialEighteenMpSharp.propTypes = { ...Icon.propTypes }

export default MaterialEighteenMpSharp
