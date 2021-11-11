import React from 'react'

import Icon from '../Icon'

const MaterialLocalPrintshopSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 8v9h4v4h12v-4h4V8H2zm14 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
  </svg>
)

const MaterialLocalPrintshopSharp = props => <Icon as={MaterialLocalPrintshopSharpSvg} {...props} />

MaterialLocalPrintshopSharp.defaultProps = { ...Icon.defaultProps }

MaterialLocalPrintshopSharp.propTypes = { ...Icon.propTypes }

export default MaterialLocalPrintshopSharp
