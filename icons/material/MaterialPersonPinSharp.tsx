import React from 'react'

import Icon from '../Icon'

const MaterialPersonPinSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 2H3v18h6l3 3 3-3h6V2zm-9 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z" />
  </svg>
)

const MaterialPersonPinSharp = props => <Icon as={MaterialPersonPinSharpSvg} {...props} />

MaterialPersonPinSharp.defaultProps = { ...Icon.defaultProps }

MaterialPersonPinSharp.propTypes = { ...Icon.propTypes }

export default MaterialPersonPinSharp