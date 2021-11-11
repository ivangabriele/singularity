import React from 'react'

import Icon from '../Icon'

const MaterialFestivalSvg = props => (
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
      <polygon points="13,5.7 13,4 16,4 15,2.51 16,1 11,1 11,5.7 2,12 2,22 9,22 9,17 12.03,15 15,17 15,22 22,22 22,12" />
    </g>
  </svg>
)

const MaterialFestival = props => <Icon as={MaterialFestivalSvg} {...props} />

MaterialFestival.defaultProps = { ...Icon.defaultProps }

MaterialFestival.propTypes = { ...Icon.propTypes }

export default MaterialFestival
