import React from 'react'

import Icon from '../Icon'

const MaterialSettingsInputHdmiSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 7V2H6v5H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z" />
  </svg>
)

const MaterialSettingsInputHdmiSharp = props => <Icon as={MaterialSettingsInputHdmiSharpSvg} {...props} />

MaterialSettingsInputHdmiSharp.defaultProps = { ...Icon.defaultProps }

MaterialSettingsInputHdmiSharp.propTypes = { ...Icon.propTypes }

export default MaterialSettingsInputHdmiSharp
