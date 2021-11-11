import React from 'react'

import Icon from '../Icon'

const MaterialFilterCenterFocusSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 15H3v6h6v-2H5v-4zM5 5h4V3H3v6h2V5zm16-2h-6v2h4v4h2V3zm-2 16h-4v2h6v-6h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
)

const MaterialFilterCenterFocusSharp = props => <Icon as={MaterialFilterCenterFocusSharpSvg} {...props} />

MaterialFilterCenterFocusSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterCenterFocusSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterCenterFocusSharp
