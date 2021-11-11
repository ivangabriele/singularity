import React from 'react'

import Icon from '../Icon'

const MaterialPersonAddAltOneRoundedSvg = props => (
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
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <circle cx="9" cy="8" r="4" />
        <path d="M9,14c-2.67,0-8,1.34-8,4v1c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1v-1C17,15.34,11.67,14,9,14z" />
        <polygon points="20,10 20,7 18,7 18,10 15,10 15,12 18,12 18,15 20,15 20,12 23,12 23,10" />
      </g>
    </g>
  </svg>
)

const MaterialPersonAddAltOneRounded = props => <Icon as={MaterialPersonAddAltOneRoundedSvg} {...props} />

MaterialPersonAddAltOneRounded.defaultProps = { ...Icon.defaultProps }

MaterialPersonAddAltOneRounded.propTypes = { ...Icon.propTypes }

export default MaterialPersonAddAltOneRounded
