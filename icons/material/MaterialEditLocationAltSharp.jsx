import React from 'react'

import Icon from '../Icon'

const MaterialEditLocationAltSharpSvg = props => (
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
      <path d="M13.95,13H9V8.05l5.61-5.61C13.78,2.16,12.9,2,12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8 c0-1.01-0.16-1.94-0.45-2.8L13.95,13z M11,11h2.12l6.16-6.16l-2.12-2.12L11,8.88V11z M19.29,0.59l-1.42,1.42l2.12,2.12l1.42-1.42 L19.29,0.59z" />
    </g>
  </svg>
)

const MaterialEditLocationAltSharp = props => <Icon as={MaterialEditLocationAltSharpSvg} {...props} />

MaterialEditLocationAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialEditLocationAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialEditLocationAltSharp
