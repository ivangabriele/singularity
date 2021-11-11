import React from 'react'

import Icon from '../Icon'

const MaterialAodSharpSvg = props => (
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
        <path d="M19,1H5v22h14V1z M17,18H7V6h10V18z M8,10h8v1.5H8V10z M9,13h6v1.5H9V13z" />
      </g>
    </g>
  </svg>
)

const MaterialAodSharp = props => <Icon as={MaterialAodSharpSvg} {...props} />

MaterialAodSharp.defaultProps = { ...Icon.defaultProps }

MaterialAodSharp.propTypes = { ...Icon.propTypes }

export default MaterialAodSharp
