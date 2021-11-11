import React from 'react'

import Icon from '../Icon'

const MaterialMarkunreadMailboxSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M-618-3000H782V600H-618zM0 0h24v24H0z" fill="none" />
    <path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
  </svg>
)

const MaterialMarkunreadMailbox = props => <Icon as={MaterialMarkunreadMailboxSvg} {...props} />

MaterialMarkunreadMailbox.defaultProps = { ...Icon.defaultProps }

MaterialMarkunreadMailbox.propTypes = { ...Icon.propTypes }

export default MaterialMarkunreadMailbox
