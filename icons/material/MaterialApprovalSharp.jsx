import React from 'react'

import Icon from '../Icon'

const MaterialApprovalSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M4,14v8h16v-8H4z M18,18H6v-2h12V18z M12,2C9.24,2,7,4.24,7,7l5,7l5-7C17,4.24,14.76,2,12,2z" />
      </g>
    </g>
  </svg>
)

const MaterialApprovalSharp = props => <Icon as={MaterialApprovalSharpSvg} {...props} />

MaterialApprovalSharp.defaultProps = { ...Icon.defaultProps }

MaterialApprovalSharp.propTypes = { ...Icon.propTypes }

export default MaterialApprovalSharp
