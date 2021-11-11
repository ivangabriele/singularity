import React from 'react'

import Icon from '../Icon'

const MaterialClearAllOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" />
  </svg>
)

const MaterialClearAllOutlined = props => <Icon as={MaterialClearAllOutlinedSvg} {...props} />

MaterialClearAllOutlined.defaultProps = { ...Icon.defaultProps }

MaterialClearAllOutlined.propTypes = { ...Icon.propTypes }

export default MaterialClearAllOutlined
