import React from 'react'

import Icon from '../Icon'

const MaterialMarkunreadMailboxRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6H10v5c0 .55-.45 1-1 1s-1-.45-1-1V4h5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
  </svg>
)

const MaterialMarkunreadMailboxRounded = props => <Icon as={MaterialMarkunreadMailboxRoundedSvg} {...props} />

MaterialMarkunreadMailboxRounded.defaultProps = { ...Icon.defaultProps }

MaterialMarkunreadMailboxRounded.propTypes = { ...Icon.propTypes }

export default MaterialMarkunreadMailboxRounded
