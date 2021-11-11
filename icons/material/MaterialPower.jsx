import React from 'react'

import Icon from '../Icon'

const MaterialPowerSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z" />
  </svg>
)

const MaterialPower = props => <Icon as={MaterialPowerSvg} {...props} />

MaterialPower.defaultProps = { ...Icon.defaultProps }

MaterialPower.propTypes = { ...Icon.propTypes }

export default MaterialPower
