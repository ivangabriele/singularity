import React from 'react'

import Icon from '../Icon'

const MaterialGridThreexthreeOutlinedSvg = props => (
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
      <path d="M20,10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4H20z M14,14h-4v-4h4V14z" />
    </g>
  </svg>
)

const MaterialGridThreexthreeOutlined = props => <Icon as={MaterialGridThreexthreeOutlinedSvg} {...props} />

MaterialGridThreexthreeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialGridThreexthreeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialGridThreexthreeOutlined
