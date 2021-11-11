import React from 'react'

import Icon from '../Icon'

const MaterialOpenInBrowserSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4H3zm9 6l-4 4h3v6h2v-6h3l-4-4z" />
  </svg>
)

const MaterialOpenInBrowserSharp = props => <Icon as={MaterialOpenInBrowserSharpSvg} {...props} />

MaterialOpenInBrowserSharp.defaultProps = { ...Icon.defaultProps }

MaterialOpenInBrowserSharp.propTypes = { ...Icon.propTypes }

export default MaterialOpenInBrowserSharp
