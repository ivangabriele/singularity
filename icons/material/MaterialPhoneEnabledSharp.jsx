import React from 'react'

import Icon from '../Icon'

const MaterialPhoneEnabledSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <g>
      <g>
        <path d="M3,15.46l5.27-0.61l2.52,2.52c2.83-1.44,5.15-3.75,6.59-6.59l-2.53-2.53L15.46,3h5.51 C21.55,13.18,13.18,21.55,3,20.97V15.46z" />
      </g>
    </g>
  </svg>
)

const MaterialPhoneEnabledSharp = props => <Icon as={MaterialPhoneEnabledSharpSvg} {...props} />

MaterialPhoneEnabledSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhoneEnabledSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhoneEnabledSharp
