import React from 'react'

import Icon from '../Icon'

const MaterialFiveGSharpSvg = props => (
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
        <polygon points="17,13 19,13 19,15 14,15 14,9 21,9 21,7 12,7 12,17 21,17 21,11 17,11" />
        <polygon points="3,13 8,13 8,15 3,15 3,17 10,17 10,11 5,11 5,9 10,9 10,7 3,7" />
      </g>
    </g>
  </svg>
)

const MaterialFiveGSharp = props => <Icon as={MaterialFiveGSharpSvg} {...props} />

MaterialFiveGSharp.defaultProps = { ...Icon.defaultProps }

MaterialFiveGSharp.propTypes = { ...Icon.propTypes }

export default MaterialFiveGSharp
