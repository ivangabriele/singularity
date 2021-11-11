import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardTabSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z" />
  </svg>
)

const MaterialKeyboardTabSharp = props => <Icon as={MaterialKeyboardTabSharpSvg} {...props} />

MaterialKeyboardTabSharp.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardTabSharp.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardTabSharp
