import React from 'react'

import Icon from '../Icon'

const MaterialHardwareSharpSvg = props => (
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
            <path d="M18,3l-3,3V3H9C6.24,3,4,5.24,4,8h5v3h6V8l3,3h2V3H18z" />
          </g>
          <g>
            <path d="M9,13v8h6v-8H9z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const MaterialHardwareSharp = props => <Icon as={MaterialHardwareSharpSvg} {...props} />

MaterialHardwareSharp.defaultProps = { ...Icon.defaultProps }

MaterialHardwareSharp.propTypes = { ...Icon.propTypes }

export default MaterialHardwareSharp
