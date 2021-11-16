import React from 'react'

import Icon from '../Icon'

const MaterialPanoramaFishEyeOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
)

const MaterialPanoramaFishEyeOutlined = props => <Icon as={MaterialPanoramaFishEyeOutlinedSvg} {...props} />

MaterialPanoramaFishEyeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPanoramaFishEyeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPanoramaFishEyeOutlined