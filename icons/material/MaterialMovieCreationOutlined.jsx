import React from 'react'

import Icon from '../Icon'

const MaterialMovieCreationOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z" />
  </svg>
)

const MaterialMovieCreationOutlined = props => <Icon as={MaterialMovieCreationOutlinedSvg} {...props} />

MaterialMovieCreationOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMovieCreationOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMovieCreationOutlined
