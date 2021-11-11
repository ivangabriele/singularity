import React from 'react'

import Icon from '../Icon'

const MaterialShopSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z" />
  </svg>
)

const MaterialShopSharp = props => <Icon as={MaterialShopSharpSvg} {...props} />

MaterialShopSharp.defaultProps = { ...Icon.defaultProps }

MaterialShopSharp.propTypes = { ...Icon.propTypes }

export default MaterialShopSharp
