import React from 'react'

import Icon from '../Icon'

const MaterialCropLandscapeRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 12H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z" />
  </svg>
)

const MaterialCropLandscapeRounded = props => <Icon as={MaterialCropLandscapeRoundedSvg} {...props} />

MaterialCropLandscapeRounded.defaultProps = { ...Icon.defaultProps }

MaterialCropLandscapeRounded.propTypes = { ...Icon.propTypes }

export default MaterialCropLandscapeRounded