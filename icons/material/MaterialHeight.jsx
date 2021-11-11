import React from 'react'

import Icon from '../Icon'

const MaterialHeightSvg = props => (
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
      <g />
      <polygon points="13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01" />
    </g>
  </svg>
)

const MaterialHeight = props => <Icon as={MaterialHeightSvg} {...props} />

MaterialHeight.defaultProps = { ...Icon.defaultProps }

MaterialHeight.propTypes = { ...Icon.propTypes }

export default MaterialHeight
