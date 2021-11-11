import React from 'react'

import Icon from '../Icon'

const MaterialCropSixteenNineOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" />
  </svg>
)

const MaterialCropSixteenNineOutlined = props => <Icon as={MaterialCropSixteenNineOutlinedSvg} {...props} />

MaterialCropSixteenNineOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCropSixteenNineOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCropSixteenNineOutlined
