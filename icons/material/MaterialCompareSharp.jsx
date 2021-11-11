import React from 'react'

import Icon from '../Icon'

const MaterialCompareSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 3H3v18h7v2h2V1h-2v2zm0 15H5l5-6v6zM21 3h-7v2h5v13l-5-6v9h7V3z" />
  </svg>
)

const MaterialCompareSharp = props => <Icon as={MaterialCompareSharpSvg} {...props} />

MaterialCompareSharp.defaultProps = { ...Icon.defaultProps }

MaterialCompareSharp.propTypes = { ...Icon.propTypes }

export default MaterialCompareSharp
