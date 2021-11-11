import React from 'react'

import Icon from '../Icon'

const MaterialMarkChatUnreadSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" y="0" />
      <path d="M22,6.98V18H6l-4,4V2h12.1C14.04,2.32,14,2.66,14,3c0,2.76,2.24,5,5,5C20.13,8,21.16,7.61,22,6.98z M16,3 c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S16,1.34,16,3z" />
    </g>
  </svg>
)

const MaterialMarkChatUnreadSharp = props => <Icon as={MaterialMarkChatUnreadSharpSvg} {...props} />

MaterialMarkChatUnreadSharp.defaultProps = { ...Icon.defaultProps }

MaterialMarkChatUnreadSharp.propTypes = { ...Icon.propTypes }

export default MaterialMarkChatUnreadSharp
