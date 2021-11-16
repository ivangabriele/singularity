import React from 'react'

import Icon from '../Icon'

const MaterialAccountBalanceOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z" />
  </svg>
)

const MaterialAccountBalanceOutlined = props => <Icon as={MaterialAccountBalanceOutlinedSvg} {...props} />

MaterialAccountBalanceOutlined.defaultProps = { ...Icon.defaultProps }

MaterialAccountBalanceOutlined.propTypes = { ...Icon.propTypes }

export default MaterialAccountBalanceOutlined