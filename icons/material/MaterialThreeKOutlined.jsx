import React from 'react'

import Icon from '../Icon'

const MaterialThreeKOutlinedSvg = props => (
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
        <g>
          <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
          <path d="M11,14v-4c0-0.55-0.45-1-1-1H6.5v1.5h3v1h-2v1h2v1h-3V15H10C10.55,15,11,14.55,11,14z" />
          <polygon points="14.5,12.75 16.25,15 18,15 15.75,12 18,9 16.25,9 14.5,11.25 14.5,9 13,9 13,15 14.5,15" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialThreeKOutlined = props => <Icon as={MaterialThreeKOutlinedSvg} {...props} />

MaterialThreeKOutlined.defaultProps = { ...Icon.defaultProps }

MaterialThreeKOutlined.propTypes = { ...Icon.propTypes }

export default MaterialThreeKOutlined
