import React from 'react'

import Icon from '../Icon'

const MaterialPaddingRoundedSvg = props => (
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
      <path d="M3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5z M9,8c0,0.55-0.45,1-1,1S7,8.55,7,8 s0.45-1,1-1S9,7.45,9,8z M13,8c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S13,7.45,13,8z M17,8c0,0.55-0.45,1-1,1 c-0.55,0-1-0.45-1-1s0.45-1,1-1C16.55,7,17,7.45,17,8z" />
    </g>
  </svg>
)

const MaterialPaddingRounded = props => <Icon as={MaterialPaddingRoundedSvg} {...props} />

MaterialPaddingRounded.defaultProps = { ...Icon.defaultProps }

MaterialPaddingRounded.propTypes = { ...Icon.propTypes }

export default MaterialPaddingRounded