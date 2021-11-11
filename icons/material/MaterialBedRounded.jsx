import React from 'react'

import Icon from '../Icon'

const MaterialBedRoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M21,10.78V8c0-1.65-1.35-3-3-3h-4c-0.77,0-1.47,0.3-2,0.78C11.47,5.3,10.77,5,10,5H6C4.35,5,3,6.35,3,8v2.78 C2.39,11.33,2,12.12,2,13v5c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-1h16v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-5 C22,12.12,21.61,11.33,21,10.78z M14,7h4c0.55,0,1,0.45,1,1v2h-6V8C13,7.45,13.45,7,14,7z M5,8c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v2H5V8z M4,15v-2c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1v2H4z" />
    </g>
  </svg>
)

const MaterialBedRounded = props => <Icon as={MaterialBedRoundedSvg} {...props} />

MaterialBedRounded.defaultProps = { ...Icon.defaultProps }

MaterialBedRounded.propTypes = { ...Icon.propTypes }

export default MaterialBedRounded
