import React from 'react'

import Icon from '../Icon'

const MaterialViewArrayOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M15,7v10H9V7H15z M21,5h-3v14h3V5z M17,5H7v14h10V5z M6,5H3v14h3V5z" />
  </svg>
)

const MaterialViewArrayOutlined = props => <Icon as={MaterialViewArrayOutlinedSvg} {...props} />

MaterialViewArrayOutlined.defaultProps = { ...Icon.defaultProps }

MaterialViewArrayOutlined.propTypes = { ...Icon.propTypes }

export default MaterialViewArrayOutlined
