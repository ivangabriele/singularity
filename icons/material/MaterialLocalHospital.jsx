import React from 'react'

import Icon from '../Icon'

const MaterialLocalHospitalSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
  </svg>
)

const MaterialLocalHospital = props => <Icon as={MaterialLocalHospitalSvg} {...props} />

MaterialLocalHospital.defaultProps = { ...Icon.defaultProps }

MaterialLocalHospital.propTypes = { ...Icon.propTypes }

export default MaterialLocalHospital
