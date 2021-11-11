import React from 'react'

import Icon from '../Icon'

const MaterialEjectOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6l2.93 4.4H9.07L12 8.6z" />
  </svg>
)

const MaterialEjectOutlined = props => <Icon as={MaterialEjectOutlinedSvg} {...props} />

MaterialEjectOutlined.defaultProps = { ...Icon.defaultProps }

MaterialEjectOutlined.propTypes = { ...Icon.propTypes }

export default MaterialEjectOutlined
