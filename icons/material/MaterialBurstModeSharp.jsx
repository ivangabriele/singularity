import React from 'react'

import Icon from '../Icon'

const MaterialBurstModeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M1 5h2v14H1V5zm4 0h2v14H5V5zm18 0H9v14h14V5zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z" />
  </svg>
)

const MaterialBurstModeSharp = props => <Icon as={MaterialBurstModeSharpSvg} {...props} />

MaterialBurstModeSharp.defaultProps = { ...Icon.defaultProps }

MaterialBurstModeSharp.propTypes = { ...Icon.propTypes }

export default MaterialBurstModeSharp
