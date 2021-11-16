import React from 'react'

import Icon from '../Icon'

const MaterialSystemSecurityUpdateSvg = props => (
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
      <path d="M5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3c0-1.1-0.9-2-2-2H7C5.9,1,5,1.9,5,3z M17,18H7V6h10V18z M16,12h-3V8h-2v4H8 l4,4L16,12z" />
    </g>
  </svg>
)

const MaterialSystemSecurityUpdate = props => <Icon as={MaterialSystemSecurityUpdateSvg} {...props} />

MaterialSystemSecurityUpdate.defaultProps = { ...Icon.defaultProps }

MaterialSystemSecurityUpdate.propTypes = { ...Icon.propTypes }

export default MaterialSystemSecurityUpdate