import React from 'react'

import Icon from '../Icon'

const MaterialArrowBackSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
)

const MaterialArrowBack = props => <Icon as={MaterialArrowBackSvg} {...props} />

MaterialArrowBack.defaultProps = { ...Icon.defaultProps }

MaterialArrowBack.propTypes = { ...Icon.propTypes }

export default MaterialArrowBack