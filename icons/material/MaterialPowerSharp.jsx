import React from 'react'

import Icon from '../Icon'

const MaterialPowerSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 7V3h-2v4h-4V3H8v4H6v7.5L9.5 18v3h5v-3l3.5-3.51V7h-2z" />
  </svg>
)

const MaterialPowerSharp = props => <Icon as={MaterialPowerSharpSvg} {...props} />

MaterialPowerSharp.defaultProps = { ...Icon.defaultProps }

MaterialPowerSharp.propTypes = { ...Icon.propTypes }

export default MaterialPowerSharp
