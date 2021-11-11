import React from 'react'

import Icon from '../Icon'

const MaterialLaptopMacSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 18l1.99-2L22 3H2v13l2 2H0v2h24v-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
  </svg>
)

const MaterialLaptopMacSharp = props => <Icon as={MaterialLaptopMacSharpSvg} {...props} />

MaterialLaptopMacSharp.defaultProps = { ...Icon.defaultProps }

MaterialLaptopMacSharp.propTypes = { ...Icon.propTypes }

export default MaterialLaptopMacSharp
