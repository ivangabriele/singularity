import React from 'react'

import Icon from '../Icon'

const MaterialCancelPresentationSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M1 3v18h22V3H1zm20 16H3V5h18v14zM9.41 16L12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59z" />
  </svg>
)

const MaterialCancelPresentationSharp = props => <Icon as={MaterialCancelPresentationSharpSvg} {...props} />

MaterialCancelPresentationSharp.defaultProps = { ...Icon.defaultProps }

MaterialCancelPresentationSharp.propTypes = { ...Icon.propTypes }

export default MaterialCancelPresentationSharp