import React from 'react'

import Icon from '../Icon'

const MaterialSdCardOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z" />
  </svg>
)

const MaterialSdCardOutlined = props => <Icon as={MaterialSdCardOutlinedSvg} {...props} />

MaterialSdCardOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSdCardOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSdCardOutlined