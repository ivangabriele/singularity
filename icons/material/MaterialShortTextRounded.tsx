import React from 'react'

import Icon from '../Icon'

const MaterialShortTextRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 9h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h8c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z" />
  </svg>
)

const MaterialShortTextRounded = props => <Icon as={MaterialShortTextRoundedSvg} {...props} />

MaterialShortTextRounded.defaultProps = { ...Icon.defaultProps }

MaterialShortTextRounded.propTypes = { ...Icon.propTypes }

export default MaterialShortTextRounded