import React from 'react'

import Icon from '../Icon'

const MaterialFormatItalicOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z" />
  </svg>
)

const MaterialFormatItalicOutlined = props => <Icon as={MaterialFormatItalicOutlinedSvg} {...props} />

MaterialFormatItalicOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFormatItalicOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFormatItalicOutlined
