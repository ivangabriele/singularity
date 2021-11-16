import React from 'react'

import Icon from '../Icon'

const MaterialMoreTimeOutlinedSvg = props => (
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
        <polygon points="10,8 10,14 14.7,16.9 15.5,15.7 11.5,13.3 11.5,8" />
        <path d="M17.92,12c0.05,0.33,0.08,0.66,0.08,1c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-3.9,3.1-7,7-7c0.7,0,1.37,0.1,2,0.29V4.23 C12.36,4.08,11.69,4,11,4c-5,0-9,4-9,9s4,9,9,9s9-4,9-9c0-0.34-0.02-0.67-0.06-1H17.92z" />
        <polygon points="20,5 20,2 18,2 18,5 15,5 15,7 18,7 18,10 20,10 20,7 23,7 23,5" />
      </g>
    </g>
  </svg>
)

const MaterialMoreTimeOutlined = props => <Icon as={MaterialMoreTimeOutlinedSvg} {...props} />

MaterialMoreTimeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMoreTimeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMoreTimeOutlined