import React from 'react'

import Icon from '../Icon'

const MaterialChargingStationSharpSvg = props => (
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
      <path d="M14.5,11l-3,6v-4h-2l3-6v4H14.5z M5,1h14v22H5V1z M7,6v12h10V6H7z" />
    </g>
  </svg>
)

const MaterialChargingStationSharp = props => <Icon as={MaterialChargingStationSharpSvg} {...props} />

MaterialChargingStationSharp.defaultProps = { ...Icon.defaultProps }

MaterialChargingStationSharp.propTypes = { ...Icon.propTypes }

export default MaterialChargingStationSharp
