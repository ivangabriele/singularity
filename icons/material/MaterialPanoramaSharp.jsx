import React from 'react'

import Icon from '../Icon'

const MaterialPanoramaSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 20V4H1v16h22zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z" />
  </svg>
)

const MaterialPanoramaSharp = props => <Icon as={MaterialPanoramaSharpSvg} {...props} />

MaterialPanoramaSharp.defaultProps = { ...Icon.defaultProps }

MaterialPanoramaSharp.propTypes = { ...Icon.propTypes }

export default MaterialPanoramaSharp
