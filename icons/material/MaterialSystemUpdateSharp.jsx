import React from 'react'

import Icon from '../Icon'

const MaterialSystemUpdateSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 1v22h14V1H5zm12 18H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z" />
  </svg>
)

const MaterialSystemUpdateSharp = props => <Icon as={MaterialSystemUpdateSharpSvg} {...props} />

MaterialSystemUpdateSharp.defaultProps = { ...Icon.defaultProps }

MaterialSystemUpdateSharp.propTypes = { ...Icon.propTypes }

export default MaterialSystemUpdateSharp
