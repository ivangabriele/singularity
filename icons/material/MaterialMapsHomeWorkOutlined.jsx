import React from 'react'

import Icon from '../Icon'

const MaterialMapsHomeWorkOutlinedSvg = props => (
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
        <rect height="2" width="2" x="17" y="7" />
        <rect height="2" width="2" x="17" y="11" />
        <rect height="2" width="2" x="17" y="15" />
        <path d="M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-7l5-3.5l5,3.5V19z" />
        <polygon points="10,3 10,4.97 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3" />
      </g>
    </g>
  </svg>
)

const MaterialMapsHomeWorkOutlined = props => <Icon as={MaterialMapsHomeWorkOutlinedSvg} {...props} />

MaterialMapsHomeWorkOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMapsHomeWorkOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMapsHomeWorkOutlined
