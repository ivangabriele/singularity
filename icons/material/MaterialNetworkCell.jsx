import React from 'react'

import Icon from '../Icon'

const MaterialNetworkCellSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z" />
  </svg>
)

const MaterialNetworkCell = props => <Icon as={MaterialNetworkCellSvg} {...props} />

MaterialNetworkCell.defaultProps = { ...Icon.defaultProps }

MaterialNetworkCell.propTypes = { ...Icon.propTypes }

export default MaterialNetworkCell
