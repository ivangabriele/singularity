import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardArrowDownOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
)

const MaterialKeyboardArrowDownOutlined = props => <Icon as={MaterialKeyboardArrowDownOutlinedSvg} {...props} />

MaterialKeyboardArrowDownOutlined.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardArrowDownOutlined.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardArrowDownOutlined
