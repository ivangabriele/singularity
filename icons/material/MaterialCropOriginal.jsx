import React from 'react'

import Icon from '../Icon'

const MaterialCropOriginalSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
  </svg>
)

const MaterialCropOriginal = props => <Icon as={MaterialCropOriginalSvg} {...props} />

MaterialCropOriginal.defaultProps = { ...Icon.defaultProps }

MaterialCropOriginal.propTypes = { ...Icon.propTypes }

export default MaterialCropOriginal
