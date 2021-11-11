import React from 'react'

import Icon from '../Icon'

const MaterialSettingsCellSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM6 0v20h12V0H6zm10 16H8V4h8v12z" />
  </svg>
)

const MaterialSettingsCellSharp = props => <Icon as={MaterialSettingsCellSharpSvg} {...props} />

MaterialSettingsCellSharp.defaultProps = { ...Icon.defaultProps }

MaterialSettingsCellSharp.propTypes = { ...Icon.propTypes }

export default MaterialSettingsCellSharp
