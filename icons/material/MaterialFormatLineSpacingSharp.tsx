import React from 'react'

import Icon from '../Icon'

const MaterialFormatLineSpacingSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z" />
  </svg>
)

const MaterialFormatLineSpacingSharp = props => <Icon as={MaterialFormatLineSpacingSharpSvg} {...props} />

MaterialFormatLineSpacingSharp.defaultProps = { ...Icon.defaultProps }

MaterialFormatLineSpacingSharp.propTypes = { ...Icon.propTypes }

export default MaterialFormatLineSpacingSharp