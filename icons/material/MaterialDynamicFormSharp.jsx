import React from 'react'

import Icon from '../Icon'

const MaterialDynamicFormSharpSvg = props => (
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
      <path d="M17,20v-9h-2V4h7l-2,5h2L17,20z M15,13v7H2v-7H15z M6.25,15.75h-1.5v1.5h1.5V15.75z M13,4v7H2V4H13z M6.25,6.75h-1.5v1.5 h1.5V6.75z" />
    </g>
  </svg>
)

const MaterialDynamicFormSharp = props => <Icon as={MaterialDynamicFormSharpSvg} {...props} />

MaterialDynamicFormSharp.defaultProps = { ...Icon.defaultProps }

MaterialDynamicFormSharp.propTypes = { ...Icon.propTypes }

export default MaterialDynamicFormSharp
