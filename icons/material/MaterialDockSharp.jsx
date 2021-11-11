import React from 'react'

import Icon from '../Icon'

const MaterialDockSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 23h8v-2H8v2zM18 1.01L6 1v18h12V1.01zM16 15H8V5h8v10z" />
  </svg>
)

const MaterialDockSharp = props => <Icon as={MaterialDockSharpSvg} {...props} />

MaterialDockSharp.defaultProps = { ...Icon.defaultProps }

MaterialDockSharp.propTypes = { ...Icon.propTypes }

export default MaterialDockSharp
