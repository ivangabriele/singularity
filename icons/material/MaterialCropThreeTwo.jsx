import React from 'react'

import Icon from '../Icon'

const MaterialCropThreeTwoSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" />
  </svg>
)

const MaterialCropThreeTwo = props => <Icon as={MaterialCropThreeTwoSvg} {...props} />

MaterialCropThreeTwo.defaultProps = { ...Icon.defaultProps }

MaterialCropThreeTwo.propTypes = { ...Icon.propTypes }

export default MaterialCropThreeTwo
