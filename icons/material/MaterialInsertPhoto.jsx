import React from 'react'

import Icon from '../Icon'

const MaterialInsertPhotoSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
  </svg>
)

const MaterialInsertPhoto = props => <Icon as={MaterialInsertPhotoSvg} {...props} />

MaterialInsertPhoto.defaultProps = { ...Icon.defaultProps }

MaterialInsertPhoto.propTypes = { ...Icon.propTypes }

export default MaterialInsertPhoto
