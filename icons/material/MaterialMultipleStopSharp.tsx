import React from 'react'

import Icon from '../Icon'

const MaterialMultipleStopSharpSvg = props => (
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
      <path d="M17,4l4,4l-4,4V9h-4V7h4V4z M7,17h4v-2H7v-3l-4,4l4,4V17z M19,15h-2v2h2V15z M15,15h-2v2h2V15z M11,7H9v2h2V7z M7,7H5v2h2 V7z" />
    </g>
  </svg>
)

const MaterialMultipleStopSharp = props => <Icon as={MaterialMultipleStopSharpSvg} {...props} />

MaterialMultipleStopSharp.defaultProps = { ...Icon.defaultProps }

MaterialMultipleStopSharp.propTypes = { ...Icon.propTypes }

export default MaterialMultipleStopSharp