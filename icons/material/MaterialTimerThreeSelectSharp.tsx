import React from 'react'

import Icon from '../Icon'

const MaterialTimerThreeSelectSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M21,11v2h-4v1h4v5h-6v-2h4v-1h-4v-5H21z M4,5v3h6v2.5H4v3h6V16H4v3h9V5H4z" />
  </svg>
)

const MaterialTimerThreeSelectSharp = props => <Icon as={MaterialTimerThreeSelectSharpSvg} {...props} />

MaterialTimerThreeSelectSharp.defaultProps = { ...Icon.defaultProps }

MaterialTimerThreeSelectSharp.propTypes = { ...Icon.propTypes }

export default MaterialTimerThreeSelectSharp