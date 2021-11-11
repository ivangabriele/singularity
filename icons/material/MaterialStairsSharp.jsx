import React from 'react'

import Icon from '../Icon'

const MaterialStairsSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
      <g>
        <g>
          <path d="M3,3v18h18V3H3z M18,8h-2.42v3.33H13v3.33h-2.58V18H6v-2h2.42v-3.33H11V9.33h2.58V6H18V8z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialStairsSharp = props => <Icon as={MaterialStairsSharpSvg} {...props} />

MaterialStairsSharp.defaultProps = { ...Icon.defaultProps }

MaterialStairsSharp.propTypes = { ...Icon.propTypes }

export default MaterialStairsSharp
