import React from 'react'

import Icon from '../Icon'

const MaterialHouseSvg = props => (
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
      <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
    </g>
  </svg>
)

const MaterialHouse = props => <Icon as={MaterialHouseSvg} {...props} />

MaterialHouse.defaultProps = { ...Icon.defaultProps }

MaterialHouse.propTypes = { ...Icon.propTypes }

export default MaterialHouse
