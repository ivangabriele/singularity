import React from 'react'

import Icon from '../Icon'

const MaterialStopCircleRoundedSvg = props => (
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
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path
        d="M9,16h6c0.55,0,1-0.45,1-1V9c0-0.55-0.45-1-1-1H9C8.45,8,8,8.45,8,9v6 C8,15.55,8.45,16,9,16z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2L12,2z"
        fill-rule="evenodd"
      />
    </g>
  </svg>
)

const MaterialStopCircleRounded = props => <Icon as={MaterialStopCircleRoundedSvg} {...props} />

MaterialStopCircleRounded.defaultProps = { ...Icon.defaultProps }

MaterialStopCircleRounded.propTypes = { ...Icon.propTypes }

export default MaterialStopCircleRounded
