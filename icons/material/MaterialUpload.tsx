import React from 'react'

import Icon from '../Icon'

const MaterialUploadSvg = props => (
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
      <path d="M5,20h14v-2H5V20z M5,10h4v6h6v-6h4l-7-7L5,10z" />
    </g>
  </svg>
)

const MaterialUpload = props => <Icon as={MaterialUploadSvg} {...props} />

MaterialUpload.defaultProps = { ...Icon.defaultProps }

MaterialUpload.propTypes = { ...Icon.propTypes }

export default MaterialUpload