import React from 'react'

import Icon from '../Icon'

const MaterialHardwareRoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <g>
        <g>
          <g>
            <path d="M17.59,3.41L15,6V5c0-1.1-0.9-2-2-2H9C6.24,3,4,5.24,4,8h5v3h6V8l2.59,2.59c0.26,0.26,0.62,0.41,1,0.41h0.01 C19.37,11,20,10.37,20,9.59V4.41C20,3.63,19.37,3,18.59,3h-0.01C18.21,3,17.85,3.15,17.59,3.41z" />
          </g>
          <g>
            <path d="M9,13v7c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-7H9z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const MaterialHardwareRounded = props => <Icon as={MaterialHardwareRoundedSvg} {...props} />

MaterialHardwareRounded.defaultProps = { ...Icon.defaultProps }

MaterialHardwareRounded.propTypes = { ...Icon.propTypes }

export default MaterialHardwareRounded
