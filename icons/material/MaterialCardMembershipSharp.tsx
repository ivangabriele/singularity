import React from 'react'

import Icon from '../Icon'

const MaterialCardMembershipSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2v15h6v5l4-2 4 2v-5h6V2zm-2 13H4v-2h16v2zm0-5H4V4h16v6z" />
  </svg>
)

const MaterialCardMembershipSharp = props => <Icon as={MaterialCardMembershipSharpSvg} {...props} />

MaterialCardMembershipSharp.defaultProps = { ...Icon.defaultProps }

MaterialCardMembershipSharp.propTypes = { ...Icon.propTypes }

export default MaterialCardMembershipSharp