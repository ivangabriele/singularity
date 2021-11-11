import React from 'react'

import Icon from '../Icon'

const MaterialMapsHomeWorkRoundedSvg = props => (
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
        <path d="M14.16,10.4l-5-3.57c-0.7-0.5-1.63-0.5-2.32,0l-5,3.57C1.31,10.78,1,11.38,1,12.03V20c0,0.55,0.45,1,1,1h4v-6h4v6h4 c0.55,0,1-0.45,1-1v-7.97C15,11.38,14.69,10.78,14.16,10.4z" />
        <path d="M21.03,3h-9.06C10.88,3,10,3.88,10,4.97l0.09,0.09c0.08,0.05,0.16,0.09,0.24,0.14l5,3.57c0.76,0.54,1.3,1.34,1.54,2.23H19 v2h-2v2h2v2h-2v3v1h4.03c1.09,0,1.97-0.88,1.97-1.97V4.97C23,3.88,22.12,3,21.03,3z M19,9h-2V7h2V9z" />
      </g>
    </g>
  </svg>
)

const MaterialMapsHomeWorkRounded = props => <Icon as={MaterialMapsHomeWorkRoundedSvg} {...props} />

MaterialMapsHomeWorkRounded.defaultProps = { ...Icon.defaultProps }

MaterialMapsHomeWorkRounded.propTypes = { ...Icon.propTypes }

export default MaterialMapsHomeWorkRounded
