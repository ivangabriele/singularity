import React from 'react'

import Icon from '../Icon'

const MaterialCheckBoxOutlineBlankRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
)

const MaterialCheckBoxOutlineBlankRounded = props => <Icon as={MaterialCheckBoxOutlineBlankRoundedSvg} {...props} />

MaterialCheckBoxOutlineBlankRounded.defaultProps = { ...Icon.defaultProps }

MaterialCheckBoxOutlineBlankRounded.propTypes = { ...Icon.propTypes }

export default MaterialCheckBoxOutlineBlankRounded
