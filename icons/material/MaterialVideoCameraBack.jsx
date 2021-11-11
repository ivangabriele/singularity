import React from 'react'

import Icon from '../Icon'

const MaterialVideoCameraBackSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l4,3.98v-11L18,10.48z M5,16 l2.38-3.17L9,15l2.62-3.5L15,16H5z" />
    </g>
  </svg>
)

const MaterialVideoCameraBack = props => <Icon as={MaterialVideoCameraBackSvg} {...props} />

MaterialVideoCameraBack.defaultProps = { ...Icon.defaultProps }

MaterialVideoCameraBack.propTypes = { ...Icon.propTypes }

export default MaterialVideoCameraBack
