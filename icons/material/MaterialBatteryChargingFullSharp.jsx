import React from 'react'

import Icon from '../Icon'

const MaterialBatteryChargingFullSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 4h-3V2h-4v2H7v18h10V4zm-6 16v-5.5H9L13 7v5.5h2L11 20z" />
  </svg>
)

const MaterialBatteryChargingFullSharp = props => <Icon as={MaterialBatteryChargingFullSharpSvg} {...props} />

MaterialBatteryChargingFullSharp.defaultProps = { ...Icon.defaultProps }

MaterialBatteryChargingFullSharp.propTypes = { ...Icon.propTypes }

export default MaterialBatteryChargingFullSharp
