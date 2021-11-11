import React from 'react'

import Icon from '../Icon'

const MaterialPhonelinkEraseSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM21 1H7v5h2V4h10v16H9v-2H7v5h14V1z" />
  </svg>
)

const MaterialPhonelinkEraseSharp = props => <Icon as={MaterialPhonelinkEraseSharpSvg} {...props} />

MaterialPhonelinkEraseSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhonelinkEraseSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhonelinkEraseSharp
