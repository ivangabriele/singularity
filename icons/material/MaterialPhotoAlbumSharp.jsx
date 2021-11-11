import React from 'react'

import Icon from '../Icon'

const MaterialPhotoAlbumSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z" />
  </svg>
)

const MaterialPhotoAlbumSharp = props => <Icon as={MaterialPhotoAlbumSharpSvg} {...props} />

MaterialPhotoAlbumSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhotoAlbumSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhotoAlbumSharp
