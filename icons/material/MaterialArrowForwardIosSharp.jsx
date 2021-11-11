import React from 'react'

import Icon from '../Icon'

const MaterialArrowForwardIosSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
    </g>
  </svg>
)

const MaterialArrowForwardIosSharp = props => <Icon as={MaterialArrowForwardIosSharpSvg} {...props} />

MaterialArrowForwardIosSharp.defaultProps = { ...Icon.defaultProps }

MaterialArrowForwardIosSharp.propTypes = { ...Icon.propTypes }

export default MaterialArrowForwardIosSharp
