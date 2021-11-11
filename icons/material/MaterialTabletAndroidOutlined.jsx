import React from 'react'

import Icon from '../Icon'

const MaterialTabletAndroidOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z" />
  </svg>
)

const MaterialTabletAndroidOutlined = props => <Icon as={MaterialTabletAndroidOutlinedSvg} {...props} />

MaterialTabletAndroidOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTabletAndroidOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTabletAndroidOutlined
