import React from 'react'

import Icon from '../Icon'

const MaterialPowerInputOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z" />
  </svg>
)

const MaterialPowerInputOutlined = props => <Icon as={MaterialPowerInputOutlinedSvg} {...props} />

MaterialPowerInputOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPowerInputOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPowerInputOutlined
