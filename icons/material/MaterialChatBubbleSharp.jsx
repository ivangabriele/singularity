import React from 'react'

import Icon from '../Icon'

const MaterialChatBubbleSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2v20l4-4h16V2z" />
  </svg>
)

const MaterialChatBubbleSharp = props => <Icon as={MaterialChatBubbleSharpSvg} {...props} />

MaterialChatBubbleSharp.defaultProps = { ...Icon.defaultProps }

MaterialChatBubbleSharp.propTypes = { ...Icon.propTypes }

export default MaterialChatBubbleSharp
