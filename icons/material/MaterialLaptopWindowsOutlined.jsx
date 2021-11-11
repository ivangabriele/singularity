import React from 'react'

import Icon from '../Icon'

const MaterialLaptopWindowsOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z" />
  </svg>
)

const MaterialLaptopWindowsOutlined = props => <Icon as={MaterialLaptopWindowsOutlinedSvg} {...props} />

MaterialLaptopWindowsOutlined.defaultProps = { ...Icon.defaultProps }

MaterialLaptopWindowsOutlined.propTypes = { ...Icon.propTypes }

export default MaterialLaptopWindowsOutlined
