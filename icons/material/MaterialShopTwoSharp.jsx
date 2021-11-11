import React from 'react'

import Icon from '../Icon'

const MaterialShopTwoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 9H1v13h18v-2H3V9zm15-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v13h18V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z" />
  </svg>
)

const MaterialShopTwoSharp = props => <Icon as={MaterialShopTwoSharpSvg} {...props} />

MaterialShopTwoSharp.defaultProps = { ...Icon.defaultProps }

MaterialShopTwoSharp.propTypes = { ...Icon.propTypes }

export default MaterialShopTwoSharp
