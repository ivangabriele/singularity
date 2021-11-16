import React from 'react'

import Icon from '../Icon'

const MaterialSwitchLeftSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M8.5,8.62v6.76L5.12,12L8.5,8.62 M10,5l-7,7l7,7V5L10,5z M14,5v14l7-7L14,5z" />
  </svg>
)

const MaterialSwitchLeft = props => <Icon as={MaterialSwitchLeftSvg} {...props} />

MaterialSwitchLeft.defaultProps = { ...Icon.defaultProps }

MaterialSwitchLeft.propTypes = { ...Icon.propTypes }

export default MaterialSwitchLeft