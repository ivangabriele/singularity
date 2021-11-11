import React from 'react'

import Icon from '../Icon'

const MaterialViewModuleOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M3,5v14h18V5H3z M19,11h-3.33V7H19V11z M13.67,11h-3.33V7h3.33V11z M8.33,7v4H5V7H8.33z M5,17v-4h3.33v4H5z M10.33,17v-4 h3.33v4H10.33z M15.67,17v-4H19v4H15.67z" />
  </svg>
)

const MaterialViewModuleOutlined = props => <Icon as={MaterialViewModuleOutlinedSvg} {...props} />

MaterialViewModuleOutlined.defaultProps = { ...Icon.defaultProps }

MaterialViewModuleOutlined.propTypes = { ...Icon.propTypes }

export default MaterialViewModuleOutlined
