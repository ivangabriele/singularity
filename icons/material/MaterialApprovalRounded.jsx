import React from 'react'

import Icon from '../Icon'

const MaterialApprovalRoundedSvg = props => (
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
        <path d="M4,16v4c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2H6C4.9,14,4,14.9,4,16z M17,18H7c-0.55,0-1-0.45-1-1v0 c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1v0C18,17.55,17.55,18,17,18z M12,2C9.54,2,7.48,3.79,7.07,6.13 C6.99,6.65,7.13,7.18,7.43,7.6l3.76,5.26c0.4,0.56,1.23,0.56,1.63,0l3.76-5.26c0.3-0.42,0.44-0.95,0.35-1.47 C16.52,3.79,14.46,2,12,2z" />
      </g>
    </g>
  </svg>
)

const MaterialApprovalRounded = props => <Icon as={MaterialApprovalRoundedSvg} {...props} />

MaterialApprovalRounded.defaultProps = { ...Icon.defaultProps }

MaterialApprovalRounded.propTypes = { ...Icon.propTypes }

export default MaterialApprovalRounded
