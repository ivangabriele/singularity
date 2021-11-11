import React from 'react'

import Icon from '../Icon'

const MaterialTwoKPlusOutlinedSvg = props => (
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
          <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z" />
          <path d="M10,13.5H7.5v-1H9c0.55,0,1-0.45,1-1V10c0-0.55-0.45-1-1-1H6v1.5h2.5v1H7c-0.55,0-1,0.45-1,1V15h4V13.5z" />
          <polygon points="12.5,12.75 14.25,15 16,15 13.75,12 16,9 14.25,9 12.5,11.25 12.5,9 11,9 11,15 12.5,15" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialTwoKPlusOutlined = props => <Icon as={MaterialTwoKPlusOutlinedSvg} {...props} />

MaterialTwoKPlusOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTwoKPlusOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTwoKPlusOutlined
