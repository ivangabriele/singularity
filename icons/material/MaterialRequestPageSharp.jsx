import React from 'react'

import Icon from '../Icon'

const MaterialRequestPageSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M14,2H4.01L4,22h16V8L14,2z M15,11h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9V9h2V8h2v1h2V11z" />
  </svg>
)

const MaterialRequestPageSharp = props => <Icon as={MaterialRequestPageSharpSvg} {...props} />

MaterialRequestPageSharp.defaultProps = { ...Icon.defaultProps }

MaterialRequestPageSharp.propTypes = { ...Icon.propTypes }

export default MaterialRequestPageSharp
