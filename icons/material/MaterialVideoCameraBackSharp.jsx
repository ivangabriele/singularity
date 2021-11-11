import React from 'react'

import Icon from '../Icon'

const MaterialVideoCameraBackSharpSvg = props => (
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
      <path d="M18,10.48V4H2v16h16v-6.48l4,3.98v-11L18,10.48z M5,16l2.38-3.17L9,15l2.62-3.5L15,16H5z" />
    </g>
  </svg>
)

const MaterialVideoCameraBackSharp = props => <Icon as={MaterialVideoCameraBackSharpSvg} {...props} />

MaterialVideoCameraBackSharp.defaultProps = { ...Icon.defaultProps }

MaterialVideoCameraBackSharp.propTypes = { ...Icon.propTypes }

export default MaterialVideoCameraBackSharp
