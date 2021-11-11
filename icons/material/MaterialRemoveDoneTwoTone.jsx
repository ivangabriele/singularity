import React from 'react'

import Icon from '../Icon'

const MaterialRemoveDoneTwoToneSvg = props => (
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
      <path d="M4.84,1.98L3.43,3.39l10.38,10.38l-1.41,1.41l-4.24-4.24l-1.41,1.41l5.66,5.66l2.83-2.83l6.6,6.6l1.41-1.41L4.84,1.98z M18.05,12.36L23,7.4L21.57,6l-4.94,4.94L18.05,12.36z M17.34,7.4l-1.41-1.41l-2.12,2.12l1.41,1.41L17.34,7.4z M1.08,12.35 l5.66,5.66l1.41-1.41l-5.66-5.66L1.08,12.35z" />
    </g>
  </svg>
)

const MaterialRemoveDoneTwoTone = props => <Icon as={MaterialRemoveDoneTwoToneSvg} {...props} />

MaterialRemoveDoneTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialRemoveDoneTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialRemoveDoneTwoTone
