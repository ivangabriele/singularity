import React from 'react'

import Icon from '../Icon'

const MaterialSaveAltSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" />
  </svg>
)

const MaterialSaveAltSharp = props => <Icon as={MaterialSaveAltSharpSvg} {...props} />

MaterialSaveAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialSaveAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialSaveAltSharp
