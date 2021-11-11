import React from 'react'

import Icon from '../Icon'

const MaterialLocalHospitalSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3.01L3 21h18V3zm-3 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
  </svg>
)

const MaterialLocalHospitalSharp = props => <Icon as={MaterialLocalHospitalSharpSvg} {...props} />

MaterialLocalHospitalSharp.defaultProps = { ...Icon.defaultProps }

MaterialLocalHospitalSharp.propTypes = { ...Icon.propTypes }

export default MaterialLocalHospitalSharp
