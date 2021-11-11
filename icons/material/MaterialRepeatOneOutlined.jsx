import React from 'react'

import Icon from '../Icon'

const MaterialRepeatOneOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z" />
  </svg>
)

const MaterialRepeatOneOutlined = props => <Icon as={MaterialRepeatOneOutlinedSvg} {...props} />

MaterialRepeatOneOutlined.defaultProps = { ...Icon.defaultProps }

MaterialRepeatOneOutlined.propTypes = { ...Icon.propTypes }

export default MaterialRepeatOneOutlined
