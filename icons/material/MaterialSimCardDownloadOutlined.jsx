import React from 'react'

import Icon from '../Icon'

const MaterialSimCardDownloadOutlinedSvg = props => (
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
        <path d="M18,2h-8L4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,4v16H6V8.83L10.83,4H18z" />
        <path d="M16,13l-4,4l-4-4l1.41-1.41L11,13.17V9.02L13,9v4.17l1.59-1.59L16,13z" />
      </g>
    </g>
  </svg>
)

const MaterialSimCardDownloadOutlined = props => <Icon as={MaterialSimCardDownloadOutlinedSvg} {...props} />

MaterialSimCardDownloadOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSimCardDownloadOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSimCardDownloadOutlined
