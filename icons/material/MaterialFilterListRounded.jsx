import React from 'react'

import Icon from '../Icon'

const MaterialFilterListRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z" />
  </svg>
)

const MaterialFilterListRounded = props => <Icon as={MaterialFilterListRoundedSvg} {...props} />

MaterialFilterListRounded.defaultProps = { ...Icon.defaultProps }

MaterialFilterListRounded.propTypes = { ...Icon.propTypes }

export default MaterialFilterListRounded
