import React from 'react'

import Icon from '../Icon'

const MaterialAdUnitsRoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
      <g>
        <path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M16,19H8c-0.55,0-1-0.45-1-1V6 c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v12C17,18.55,16.55,19,16,19z" />
        <path d="M15,6H9C8.45,6,8,6.45,8,7v0c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v0C16,6.45,15.55,6,15,6z" />
      </g>
    </g>
  </svg>
)

const MaterialAdUnitsRounded = props => <Icon as={MaterialAdUnitsRoundedSvg} {...props} />

MaterialAdUnitsRounded.defaultProps = { ...Icon.defaultProps }

MaterialAdUnitsRounded.propTypes = { ...Icon.propTypes }

export default MaterialAdUnitsRounded
