import React from 'react'

import Icon from '../Icon'

const MaterialScheduleSendOutlinedSvg = props => (
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
        <path d="M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.65,19.35l-2.15-2.15V14h1v2.79l1.85,1.85 L18.65,19.35z" />
        <path d="M11,12l-6-1.5V7.01l8.87,3.74c0.94-0.47,2-0.75,3.13-0.75c0.1,0,0.19,0.01,0.28,0.01L3,4v16l7-2.95c0-0.02,0-0.03,0-0.05 c0-0.8,0.14-1.56,0.39-2.28L5,16.99V13.5L11,12z" />
      </g>
    </g>
  </svg>
)

const MaterialScheduleSendOutlined = props => <Icon as={MaterialScheduleSendOutlinedSvg} {...props} />

MaterialScheduleSendOutlined.defaultProps = { ...Icon.defaultProps }

MaterialScheduleSendOutlined.propTypes = { ...Icon.propTypes }

export default MaterialScheduleSendOutlined
