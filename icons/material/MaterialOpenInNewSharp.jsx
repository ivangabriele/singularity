import React from 'react'

import Icon from '../Icon'

const MaterialOpenInNewSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
)

const MaterialOpenInNewSharp = props => <Icon as={MaterialOpenInNewSharpSvg} {...props} />

MaterialOpenInNewSharp.defaultProps = { ...Icon.defaultProps }

MaterialOpenInNewSharp.propTypes = { ...Icon.propTypes }

export default MaterialOpenInNewSharp
