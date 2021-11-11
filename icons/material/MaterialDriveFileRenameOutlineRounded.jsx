import React from 'react'

import Icon from '../Icon'

const MaterialDriveFileRenameOutlineRoundedSvg = props => (
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
      <g>
        <path d="M15,16l-4,4h8c1.1,0,2-0.9,2-2v0c0-1.1-0.9-2-2-2H15z" />
        <path d="M12.06,7.19l-8.77,8.77C3.11,16.14,3,16.4,3,16.66V19c0,0.55,0.45,1,1,1h2.34c0.27,0,0.52-0.11,0.71-0.29l8.77-8.77 L12.06,7.19z" />
        <path d="M18.71,8.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75L18.71,8.04z" />
      </g>
    </g>
  </svg>
)

const MaterialDriveFileRenameOutlineRounded = props => <Icon as={MaterialDriveFileRenameOutlineRoundedSvg} {...props} />

MaterialDriveFileRenameOutlineRounded.defaultProps = { ...Icon.defaultProps }

MaterialDriveFileRenameOutlineRounded.propTypes = { ...Icon.propTypes }

export default MaterialDriveFileRenameOutlineRounded
