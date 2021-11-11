import React from 'react'

import Icon from '../Icon'

const MaterialRemoveOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 13H5v-2h14v2z" />
  </svg>
)

const MaterialRemoveOutlined = props => <Icon as={MaterialRemoveOutlinedSvg} {...props} />

MaterialRemoveOutlined.defaultProps = { ...Icon.defaultProps }

MaterialRemoveOutlined.propTypes = { ...Icon.propTypes }

export default MaterialRemoveOutlined
