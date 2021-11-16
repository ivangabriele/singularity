import React from 'react'

import Icon from '../Icon'

const MaterialCropSevenFiveSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" />
  </svg>
)

const MaterialCropSevenFive = props => <Icon as={MaterialCropSevenFiveSvg} {...props} />

MaterialCropSevenFive.defaultProps = { ...Icon.defaultProps }

MaterialCropSevenFive.propTypes = { ...Icon.propTypes }

export default MaterialCropSevenFive