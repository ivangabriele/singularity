import React from 'react'

import Icon from '../Icon'

const MaterialPhonelinkSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 6h18V4H2v13H0v3h14v-3H4V6zm20 2h-8v12h8V8zm-2 9h-4v-7h4v7z" />
  </svg>
)

const MaterialPhonelinkSharp = props => <Icon as={MaterialPhonelinkSharpSvg} {...props} />

MaterialPhonelinkSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhonelinkSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhonelinkSharp
