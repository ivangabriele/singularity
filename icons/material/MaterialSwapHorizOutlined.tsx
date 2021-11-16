import React from 'react'

import Icon from '../Icon'

const MaterialSwapHorizOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  </svg>
)

const MaterialSwapHorizOutlined = props => <Icon as={MaterialSwapHorizOutlinedSvg} {...props} />

MaterialSwapHorizOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSwapHorizOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSwapHorizOutlined