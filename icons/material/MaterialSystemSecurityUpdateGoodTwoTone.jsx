import React from 'react'

import Icon from '../Icon'

const MaterialSystemSecurityUpdateGoodTwoToneSvg = props => (
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
        <path d="M7,21h10v-1H7V21z M7,3v1h10V3H7z" opacity=".3" />
        <path d="M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,21H7v-1h10V21z M17,18H7V6h10V18z M17,4H7V3h10V4z M16,10.05l-1.41-1.41l-3.54,3.54l-1.41-1.41l-1.41,1.41L11.05,15L16,10.05z" />
      </g>
    </g>
  </svg>
)

const MaterialSystemSecurityUpdateGoodTwoTone = props => (
  <Icon as={MaterialSystemSecurityUpdateGoodTwoToneSvg} {...props} />
)

MaterialSystemSecurityUpdateGoodTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialSystemSecurityUpdateGoodTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialSystemSecurityUpdateGoodTwoTone
