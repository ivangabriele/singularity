import React from 'react'

import Icon from '../Icon'

const MaterialRadioOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2zm0 2v3h-2V9h-2v2H4V8h16zM4 20v-7h16v7H4z" />
    <circle cx="8" cy="16.48" r="2.5" />
  </svg>
)

const MaterialRadioOutlined = props => <Icon as={MaterialRadioOutlinedSvg} {...props} />

MaterialRadioOutlined.defaultProps = { ...Icon.defaultProps }

MaterialRadioOutlined.propTypes = { ...Icon.propTypes }

export default MaterialRadioOutlined
