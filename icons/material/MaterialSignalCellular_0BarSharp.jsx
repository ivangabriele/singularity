import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellular_0BarSharpSvg = props => (
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
      <path d="M2,22h20V2L2,22z M20,20H6.83L20,6.83V20z" />
    </g>
  </svg>
)

const MaterialSignalCellular_0BarSharp = props => <Icon as={MaterialSignalCellular_0BarSharpSvg} {...props} />

MaterialSignalCellular_0BarSharp.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellular_0BarSharp.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellular_0BarSharp
