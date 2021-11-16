import React from 'react'

import Icon from '../Icon'

const MaterialWarningAmberSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
  </svg>
)

const MaterialWarningAmberSharp = props => <Icon as={MaterialWarningAmberSharpSvg} {...props} />

MaterialWarningAmberSharp.defaultProps = { ...Icon.defaultProps }

MaterialWarningAmberSharp.propTypes = { ...Icon.propTypes }

export default MaterialWarningAmberSharp