import React from 'react'

import Icon from '../Icon'

const MaterialLabelOffSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 12l-4.97-7H8.66l10.7 10.73zM2 4l1 1v14h14l2 2 1.41-1.41L3.44 2.62z" />
  </svg>
)

const MaterialLabelOffSharp = props => <Icon as={MaterialLabelOffSharpSvg} {...props} />

MaterialLabelOffSharp.defaultProps = { ...Icon.defaultProps }

MaterialLabelOffSharp.propTypes = { ...Icon.propTypes }

export default MaterialLabelOffSharp
