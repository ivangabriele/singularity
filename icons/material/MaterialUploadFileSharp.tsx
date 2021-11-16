import React from 'react'

import Icon from '../Icon'

const MaterialUploadFileSharpSvg = props => (
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
      <path d="M14,2H4v20h16V8L14,2z M13,15v4h-2v-4H8l4.01-4L16,15H13z M13,9V3.5L18.5,9H13z" />
    </g>
  </svg>
)

const MaterialUploadFileSharp = props => <Icon as={MaterialUploadFileSharpSvg} {...props} />

MaterialUploadFileSharp.defaultProps = { ...Icon.defaultProps }

MaterialUploadFileSharp.propTypes = { ...Icon.propTypes }

export default MaterialUploadFileSharp