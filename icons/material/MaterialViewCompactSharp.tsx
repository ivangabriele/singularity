import React from 'react'

import Icon from '../Icon'

const MaterialViewCompactSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" />
  </svg>
)

const MaterialViewCompactSharp = props => <Icon as={MaterialViewCompactSharpSvg} {...props} />

MaterialViewCompactSharp.defaultProps = { ...Icon.defaultProps }

MaterialViewCompactSharp.propTypes = { ...Icon.propTypes }

export default MaterialViewCompactSharp