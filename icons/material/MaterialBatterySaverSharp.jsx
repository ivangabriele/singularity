import React from 'react'

import Icon from '../Icon'

const MaterialBatterySaverSharpSvg = props => (
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
        <path d="M17,4h-3V2h-4v2H7v18h10V4z M15,14h-2v2h-2v-2H9v-2h2v-2h2v2h2V14z" />
      </g>
    </g>
  </svg>
)

const MaterialBatterySaverSharp = props => <Icon as={MaterialBatterySaverSharpSvg} {...props} />

MaterialBatterySaverSharp.defaultProps = { ...Icon.defaultProps }

MaterialBatterySaverSharp.propTypes = { ...Icon.propTypes }

export default MaterialBatterySaverSharp
