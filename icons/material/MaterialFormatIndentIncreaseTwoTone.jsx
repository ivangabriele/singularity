import React from 'react'

import Icon from '../Icon'

const MaterialFormatIndentIncreaseTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 19h18v2H3zM3 3h18v2H3zm8 4h10v2H11zM3 8v8l4-4zm8 3h10v2H11zm0 4h10v2H11z" />
  </svg>
)

const MaterialFormatIndentIncreaseTwoTone = props => <Icon as={MaterialFormatIndentIncreaseTwoToneSvg} {...props} />

MaterialFormatIndentIncreaseTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatIndentIncreaseTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatIndentIncreaseTwoTone
