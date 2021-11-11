import React from 'react'

import Icon from '../Icon'

const MaterialEMobiledataRoundedSvg = props => (
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
      <g>
        <path d="M16,8L16,8c0-0.55-0.45-1-1-1H9C8.45,7,8,7.45,8,8v8c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-5v-2h5 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-5V9h5C15.55,9,16,8.55,16,8z" />
      </g>
    </g>
  </svg>
)

const MaterialEMobiledataRounded = props => <Icon as={MaterialEMobiledataRoundedSvg} {...props} />

MaterialEMobiledataRounded.defaultProps = { ...Icon.defaultProps }

MaterialEMobiledataRounded.propTypes = { ...Icon.propTypes }

export default MaterialEMobiledataRounded
