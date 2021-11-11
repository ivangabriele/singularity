import React from 'react'

import Icon from '../Icon'

const MaterialCropLandscapeOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" />
  </svg>
)

const MaterialCropLandscapeOutlined = props => <Icon as={MaterialCropLandscapeOutlinedSvg} {...props} />

MaterialCropLandscapeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCropLandscapeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCropLandscapeOutlined
