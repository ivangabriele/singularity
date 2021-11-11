import React from 'react'

import Icon from '../Icon'

const MaterialUploadRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 16h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 3.7c-.39-.39-1.02-.39-1.41 0L6.71 8.29c-.63.63-.19 1.71.7 1.71H9v5c0 .55.45 1 1 1zm-4 2h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1z" />
  </svg>
)

const MaterialUploadRounded = props => <Icon as={MaterialUploadRoundedSvg} {...props} />

MaterialUploadRounded.defaultProps = { ...Icon.defaultProps }

MaterialUploadRounded.propTypes = { ...Icon.propTypes }

export default MaterialUploadRounded
