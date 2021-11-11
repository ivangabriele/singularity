import React from 'react'

import Icon from '../Icon'

const MaterialFilterFramesSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12" />
  </svg>
)

const MaterialFilterFrames = props => <Icon as={MaterialFilterFramesSvg} {...props} />

MaterialFilterFrames.defaultProps = { ...Icon.defaultProps }

MaterialFilterFrames.propTypes = { ...Icon.propTypes }

export default MaterialFilterFrames
