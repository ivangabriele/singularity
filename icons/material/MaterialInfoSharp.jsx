import React from 'react'

import Icon from '../Icon'

const MaterialInfoSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
)

const MaterialInfoSharp = props => <Icon as={MaterialInfoSharpSvg} {...props} />

MaterialInfoSharp.defaultProps = { ...Icon.defaultProps }

MaterialInfoSharp.propTypes = { ...Icon.propTypes }

export default MaterialInfoSharp
