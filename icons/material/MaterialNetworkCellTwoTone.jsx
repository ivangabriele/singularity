import React from 'react'

import Icon from '../Icon'

const MaterialNetworkCellTwoToneSvg = props => (
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
      <path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z" />
    </g>
  </svg>
)

const MaterialNetworkCellTwoTone = props => <Icon as={MaterialNetworkCellTwoToneSvg} {...props} />

MaterialNetworkCellTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialNetworkCellTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialNetworkCellTwoTone
