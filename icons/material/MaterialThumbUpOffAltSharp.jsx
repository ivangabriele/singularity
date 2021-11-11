import React from 'react'

import Icon from '../Icon'

const MaterialThumbUpOffAltSharpSvg = props => (
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
    </g>
    <g>
      <g>
        <path d="M14.17,1L7,8.18V21h12.31L23,12.4V8h-8.31l1.12-5.38L14.17,1z M1,9h4v12H1V9z" />
      </g>
    </g>
  </svg>
)

const MaterialThumbUpOffAltSharp = props => <Icon as={MaterialThumbUpOffAltSharpSvg} {...props} />

MaterialThumbUpOffAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialThumbUpOffAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialThumbUpOffAltSharp
