import React from 'react'

import Icon from '../Icon'

const MaterialDoubleArrowSharpSvg = props => (
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
        <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12" />
        <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12" />
      </g>
    </g>
  </svg>
)

const MaterialDoubleArrowSharp = props => <Icon as={MaterialDoubleArrowSharpSvg} {...props} />

MaterialDoubleArrowSharp.defaultProps = { ...Icon.defaultProps }

MaterialDoubleArrowSharp.propTypes = { ...Icon.propTypes }

export default MaterialDoubleArrowSharp
