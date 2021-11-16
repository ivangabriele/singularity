import React from 'react'

import Icon from '../Icon'

const MaterialExposurePlusOneRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 7c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm11 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z" />
  </svg>
)

const MaterialExposurePlusOneRounded = props => <Icon as={MaterialExposurePlusOneRoundedSvg} {...props} />

MaterialExposurePlusOneRounded.defaultProps = { ...Icon.defaultProps }

MaterialExposurePlusOneRounded.propTypes = { ...Icon.propTypes }

export default MaterialExposurePlusOneRounded