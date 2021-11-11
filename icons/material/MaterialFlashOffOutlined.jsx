import React from 'react'

import Icon from '../Icon'

const MaterialFlashOffOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 10h-3.61l2.28 2.28zm0-8H7v1.61l6.13 6.13zm-13.59.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z" />
  </svg>
)

const MaterialFlashOffOutlined = props => <Icon as={MaterialFlashOffOutlinedSvg} {...props} />

MaterialFlashOffOutlined.defaultProps = { ...Icon.defaultProps }

MaterialFlashOffOutlined.propTypes = { ...Icon.propTypes }

export default MaterialFlashOffOutlined
