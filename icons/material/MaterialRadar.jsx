import React from 'react'

import Icon from '../Icon'

const MaterialRadarSvg = props => (
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
      <g>
        <path d="M19.74,18.33C21.15,16.6,22,14.4,22,12c0-5.52-4.48-10-10-10S2,6.48,2,12s4.48,10,10,10c2.4,0,4.6-0.85,6.33-2.26 c0.27-0.22,0.53-0.46,0.78-0.71c0.03-0.03,0.05-0.06,0.07-0.08C19.38,18.75,19.57,18.54,19.74,18.33z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8c0,1.85-0.63,3.54-1.69,4.9l-1.43-1.43c0.69-0.98,1.1-2.17,1.1-3.46c0-3.31-2.69-6-6-6s-6,2.69-6,6 s2.69,6,6,6c1.3,0,2.51-0.42,3.49-1.13l1.42,1.42C15.54,19.37,13.85,20,12,20z M13.92,12.51c0.17-0.66,0.02-1.38-0.49-1.9 l-0.02-0.02c-0.77-0.77-2-0.78-2.78-0.04c-0.01,0.01-0.03,0.02-0.05,0.04c-0.78,0.78-0.78,2.05,0,2.83l0.02,0.02 c0.52,0.51,1.25,0.67,1.91,0.49l1.51,1.51c-0.6,0.36-1.29,0.58-2.04,0.58c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4 c0,0.73-0.21,1.41-0.56,2L13.92,12.51z" />
      </g>
    </g>
  </svg>
)

const MaterialRadar = props => <Icon as={MaterialRadarSvg} {...props} />

MaterialRadar.defaultProps = { ...Icon.defaultProps }

MaterialRadar.propTypes = { ...Icon.propTypes }

export default MaterialRadar
