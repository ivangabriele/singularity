import React from 'react'

import Icon from '../Icon'

const MaterialUploadOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z" />
  </svg>
)

const MaterialUploadOutlined = props => <Icon as={MaterialUploadOutlinedSvg} {...props} />

MaterialUploadOutlined.defaultProps = { ...Icon.defaultProps }

MaterialUploadOutlined.propTypes = { ...Icon.propTypes }

export default MaterialUploadOutlined