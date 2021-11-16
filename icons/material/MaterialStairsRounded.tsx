import React from 'react'

import Icon from '../Icon'

const MaterialStairsRoundedSvg = props => (
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
        <g>
          <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M17,8h-1.42v3.33H13v3.33h-2.58 L10.45,18H7c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h1.42v-3.33H11V9.33h2.58V6H17c0.55,0,1,0.45,1,1C18,7.55,17.55,8,17,8z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialStairsRounded = props => <Icon as={MaterialStairsRoundedSvg} {...props} />

MaterialStairsRounded.defaultProps = { ...Icon.defaultProps }

MaterialStairsRounded.propTypes = { ...Icon.propTypes }

export default MaterialStairsRounded