import React from 'react'

import Icon from '../Icon'

const MaterialSwitchVideoOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zM16 17H4V7h12v10z" />
  </svg>
)

const MaterialSwitchVideoOutlined = props => <Icon as={MaterialSwitchVideoOutlinedSvg} {...props} />

MaterialSwitchVideoOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSwitchVideoOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSwitchVideoOutlined