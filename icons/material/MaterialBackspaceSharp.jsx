import React from 'react'

import Icon from '../Icon'

const MaterialBackspaceSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M24 3H6l-6 9 6 9h18V3zm-5 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z" />
  </svg>
)

const MaterialBackspaceSharp = props => <Icon as={MaterialBackspaceSharpSvg} {...props} />

MaterialBackspaceSharp.defaultProps = { ...Icon.defaultProps }

MaterialBackspaceSharp.propTypes = { ...Icon.propTypes }

export default MaterialBackspaceSharp
