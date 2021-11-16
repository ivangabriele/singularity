import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularNullOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" />
  </svg>
)

const MaterialSignalCellularNullOutlined = props => <Icon as={MaterialSignalCellularNullOutlinedSvg} {...props} />

MaterialSignalCellularNullOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularNullOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularNullOutlined