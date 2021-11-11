import React from 'react'

import Icon from '../Icon'

const MaterialCropSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z" />
  </svg>
)

const MaterialCrop = props => <Icon as={MaterialCropSvg} {...props} />

MaterialCrop.defaultProps = { ...Icon.defaultProps }

MaterialCrop.propTypes = { ...Icon.propTypes }

export default MaterialCrop
