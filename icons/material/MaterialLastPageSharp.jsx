import React from 'react'

import Icon from '../Icon'

const MaterialLastPageSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z" />
  </svg>
)

const MaterialLastPageSharp = props => <Icon as={MaterialLastPageSharpSvg} {...props} />

MaterialLastPageSharp.defaultProps = { ...Icon.defaultProps }

MaterialLastPageSharp.propTypes = { ...Icon.propTypes }

export default MaterialLastPageSharp
