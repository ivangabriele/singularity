import React from 'react'

import Icon from '../Icon'

const MaterialMenuOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)

const MaterialMenuOutlined = props => <Icon as={MaterialMenuOutlinedSvg} {...props} />

MaterialMenuOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMenuOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMenuOutlined
