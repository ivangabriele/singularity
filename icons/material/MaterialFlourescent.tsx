import React from 'react'

import Icon from '../Icon'

const MaterialFlourescentSvg = props => (
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
        <rect height="6" width="14" x="5" y="9" />
        <rect height="3" width="2" x="11" y="2" />
        <rect
          height="2"
          transform="matrix(0.7046 -0.7096 0.7096 0.7046 1.1814 15.2381)"
          width="2.54"
          x="17.62"
          y="5.2"
        />
        <rect height="3" width="2" x="11" y="19" />
        <polygon points="17.29,17.71 19.08,19.51 20.5,18.09 18.7,16.3" />
        <rect
          height="2.53"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.8904 5.4222)"
          width="1.99"
          x="4.1"
          y="4.93"
        />
        <rect
          height="2"
          transform="matrix(0.7096 -0.7046 0.7046 0.7096 -11.1263 8.7897)"
          width="2.54"
          x="3.83"
          y="16.89"
        />
      </g>
    </g>
  </svg>
)

const MaterialFlourescent = props => <Icon as={MaterialFlourescentSvg} {...props} />

MaterialFlourescent.defaultProps = { ...Icon.defaultProps }

MaterialFlourescent.propTypes = { ...Icon.propTypes }

export default MaterialFlourescent