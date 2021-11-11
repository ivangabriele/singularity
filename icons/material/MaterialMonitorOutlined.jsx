import React from 'react'

import Icon from '../Icon'

const MaterialMonitorOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <g>
        <path d="M20,3H4C2.9,3,2,3.9,2,5v11c0,1.1,0.9,2,2,2h3l-1,1v2h12v-2l-1-1h3c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,16H4V5h16 V16z" />
      </g>
    </g>
  </svg>
)

const MaterialMonitorOutlined = props => <Icon as={MaterialMonitorOutlinedSvg} {...props} />

MaterialMonitorOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMonitorOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMonitorOutlined
