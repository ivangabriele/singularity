import React from 'react'

import Icon from '../Icon'

const MaterialFormatAlignLeftOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
  </svg>
)

const MaterialFormatAlignLeftOutlined = props => <Icon as={MaterialFormatAlignLeftOutlinedSvg} {...props} />

MaterialFormatAlignLeftOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFormatAlignLeftOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFormatAlignLeftOutlined