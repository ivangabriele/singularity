import React from 'react'

import Icon from '../Icon'

const MaterialPermMediaSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 6H0v16h20v-2H2V6zm22-2H14l-2-2H4v16h20V4zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z" />
  </svg>
)

const MaterialPermMediaSharp = props => <Icon as={MaterialPermMediaSharpSvg} {...props} />

MaterialPermMediaSharp.defaultProps = { ...Icon.defaultProps }

MaterialPermMediaSharp.propTypes = { ...Icon.propTypes }

export default MaterialPermMediaSharp
