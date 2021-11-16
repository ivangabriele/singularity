import React from 'react'

import Icon from '../Icon'

const MaterialSportsCricketRoundedSvg = props => (
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
      <g>
        <g>
          <path d="M15.05,12.81L6.56,4.32c-0.39-0.39-1.02-0.39-1.41,0L2.32,7.15c-0.39,0.39-0.39,1.02,0,1.41l8.49,8.49 c0.39,0.39,1.02,0.39,1.41,0l2.83-2.83C15.44,13.83,15.44,13.2,15.05,12.81z" />
          <path d="M14.34,17.76l3.53,3.53c0.39,0.39,1.03,0.39,1.42,0l0,0c0.39-0.39,0.39-1.03,0-1.42l-3.53-3.53L14.34,17.76z" />
        </g>
        <circle cx="18.5" cy="5.5" r="3.5" />
      </g>
    </g>
  </svg>
)

const MaterialSportsCricketRounded = props => <Icon as={MaterialSportsCricketRoundedSvg} {...props} />

MaterialSportsCricketRounded.defaultProps = { ...Icon.defaultProps }

MaterialSportsCricketRounded.propTypes = { ...Icon.propTypes }

export default MaterialSportsCricketRounded