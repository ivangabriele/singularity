import React from 'react'

import Icon from '../Icon'

const MaterialAlignVerticalCenterSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <polygon points="22,11 17,11 17,6 14,6 14,11 10,11 10,3 7,3 7,11 1.84,11 1.84,13 7,13 7,21 10,21 10,13 14,13 14,18 17,18 17,13 22,13" />
  </svg>
)

const MaterialAlignVerticalCenter = props => <Icon as={MaterialAlignVerticalCenterSvg} {...props} />

MaterialAlignVerticalCenter.defaultProps = { ...Icon.defaultProps }

MaterialAlignVerticalCenter.propTypes = { ...Icon.propTypes }

export default MaterialAlignVerticalCenter
