import React from 'react'

import Icon from '../Icon'

const MaterialPhotoCameraBackSharpSvg = props => (
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
      <path d="M16.83,5L15,3H9L7.17,5H2v16h20V5H16.83z M6,17l3-4l2.25,3l3-4L18,17H6z" />
    </g>
  </svg>
)

const MaterialPhotoCameraBackSharp = props => <Icon as={MaterialPhotoCameraBackSharpSvg} {...props} />

MaterialPhotoCameraBackSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhotoCameraBackSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhotoCameraBackSharp
