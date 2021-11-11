import React from 'react'

import Icon from '../Icon'

const MaterialSignalCellularOffOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 1l-8.31 8.31 8.31 8.3zM4.91 4.36L3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z" />
  </svg>
)

const MaterialSignalCellularOffOutlined = props => <Icon as={MaterialSignalCellularOffOutlinedSvg} {...props} />

MaterialSignalCellularOffOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSignalCellularOffOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSignalCellularOffOutlined
