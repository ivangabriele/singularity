import React from 'react'

import Icon from '../Icon'

const MaterialWindowSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M22,2H2v20h20V2z M20,11h-7V4h7V11z M11,4v7H4V4H11z M4,13h7v7H4V13z M13,20v-7h7v7H13z" />
    </g>
  </svg>
)

const MaterialWindowSharp = props => <Icon as={MaterialWindowSharpSvg} {...props} />

MaterialWindowSharp.defaultProps = { ...Icon.defaultProps }

MaterialWindowSharp.propTypes = { ...Icon.propTypes }

export default MaterialWindowSharp
