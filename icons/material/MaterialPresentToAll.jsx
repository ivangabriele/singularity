import React from 'react'

import Icon from '../Icon'

const MaterialPresentToAllSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z" />
  </svg>
)

const MaterialPresentToAll = props => <Icon as={MaterialPresentToAllSvg} {...props} />

MaterialPresentToAll.defaultProps = { ...Icon.defaultProps }

MaterialPresentToAll.propTypes = { ...Icon.propTypes }

export default MaterialPresentToAll
