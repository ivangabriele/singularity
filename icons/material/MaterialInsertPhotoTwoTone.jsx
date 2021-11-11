import React from 'react'

import Icon from '../Icon'

const MaterialInsertPhotoTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z" opacity=".3" />
    <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z" />
  </svg>
)

const MaterialInsertPhotoTwoTone = props => <Icon as={MaterialInsertPhotoTwoToneSvg} {...props} />

MaterialInsertPhotoTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialInsertPhotoTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialInsertPhotoTwoTone
