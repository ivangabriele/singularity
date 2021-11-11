import React from 'react'

import Icon from '../Icon'

const MaterialComputerSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 18l2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
  </svg>
)

const MaterialComputerSharp = props => <Icon as={MaterialComputerSharpSvg} {...props} />

MaterialComputerSharp.defaultProps = { ...Icon.defaultProps }

MaterialComputerSharp.propTypes = { ...Icon.propTypes }

export default MaterialComputerSharp
