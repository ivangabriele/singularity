import React from 'react'

import Icon from '../Icon'

const MaterialCenterFocusWeakSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 15H3v6h6v-2H5v-4zM5 5h4V3H3v6h2V5zm16-2h-6v2h4v4h2V3zm-2 16h-4v2h6v-6h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
)

const MaterialCenterFocusWeakSharp = props => <Icon as={MaterialCenterFocusWeakSharpSvg} {...props} />

MaterialCenterFocusWeakSharp.defaultProps = { ...Icon.defaultProps }

MaterialCenterFocusWeakSharp.propTypes = { ...Icon.propTypes }

export default MaterialCenterFocusWeakSharp
