import React from 'react'

import Icon from '../Icon'

const MaterialVideoStableSharpSvg = props => (
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
        <path d="M2,4v16h20V4H2z M4,18V6h2.95l-2.33,8.73L16.82,18H4z M20,18h-2.95l2.34-8.73L7.18,6H20V18z" />
      </g>
    </g>
  </svg>
)

const MaterialVideoStableSharp = props => <Icon as={MaterialVideoStableSharpSvg} {...props} />

MaterialVideoStableSharp.defaultProps = { ...Icon.defaultProps }

MaterialVideoStableSharp.propTypes = { ...Icon.propTypes }

export default MaterialVideoStableSharp
