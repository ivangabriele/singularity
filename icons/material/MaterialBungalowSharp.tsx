import React from 'react'

import Icon from '../Icon'

const MaterialBungalowSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,3L4.2,15.5l1.7,1.06L7,14.8V21h4v-5h2v5h4v-6.21l1.1,1.77l1.7-1.06L12,3z M13,14h-2v-2h2V14z" />
  </svg>
)

const MaterialBungalowSharp = props => <Icon as={MaterialBungalowSharpSvg} {...props} />

MaterialBungalowSharp.defaultProps = { ...Icon.defaultProps }

MaterialBungalowSharp.propTypes = { ...Icon.propTypes }

export default MaterialBungalowSharp