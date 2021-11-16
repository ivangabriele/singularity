import React from 'react'

import Icon from '../Icon'

const MaterialDoorFrontSharpSvg = props => (
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
      <path d="M19,19V3H5v16H3v2h18v-2H19z M15,13h-2v-2h2V13z" />
    </g>
  </svg>
)

const MaterialDoorFrontSharp = props => <Icon as={MaterialDoorFrontSharpSvg} {...props} />

MaterialDoorFrontSharp.defaultProps = { ...Icon.defaultProps }

MaterialDoorFrontSharp.propTypes = { ...Icon.propTypes }

export default MaterialDoorFrontSharp