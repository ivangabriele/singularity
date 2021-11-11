import React from 'react'

import Icon from '../Icon'

const MaterialSimCardAlertSharpSvg = props => (
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
      <g>
        <g>
          <path d="M20,2H10L4,8v14h16V2z M13,17h-2v-2h2V17z M13,13h-2V8h2V13z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialSimCardAlertSharp = props => <Icon as={MaterialSimCardAlertSharpSvg} {...props} />

MaterialSimCardAlertSharp.defaultProps = { ...Icon.defaultProps }

MaterialSimCardAlertSharp.propTypes = { ...Icon.propTypes }

export default MaterialSimCardAlertSharp
