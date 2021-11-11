import React from 'react'

import Icon from '../Icon'

const MaterialAddPhotoAlternateSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H3v16h16V11h-3zM5 19l3-4 2 3 3-4 4 5H5z" />
  </svg>
)

const MaterialAddPhotoAlternateSharp = props => <Icon as={MaterialAddPhotoAlternateSharpSvg} {...props} />

MaterialAddPhotoAlternateSharp.defaultProps = { ...Icon.defaultProps }

MaterialAddPhotoAlternateSharp.propTypes = { ...Icon.propTypes }

export default MaterialAddPhotoAlternateSharp
