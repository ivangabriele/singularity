import React from 'react'

import Icon from '../Icon'

const MaterialWorkOffSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 4h4v2h-3.6L22 17.6V6h-6V4c0-1.1-.9-2-2-2h-4c-.98 0-1.79.71-1.96 1.64L10 5.6V4zM3.4 1.84L1.99 3.25 4.74 6H2.01L2 21h17.74l2 2 1.41-1.41z" />
  </svg>
)

const MaterialWorkOffSharp = props => <Icon as={MaterialWorkOffSharpSvg} {...props} />

MaterialWorkOffSharp.defaultProps = { ...Icon.defaultProps }

MaterialWorkOffSharp.propTypes = { ...Icon.propTypes }

export default MaterialWorkOffSharp
