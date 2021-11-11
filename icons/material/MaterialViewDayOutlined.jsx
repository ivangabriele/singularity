import React from 'react'

import Icon from '../Icon'

const MaterialViewDayOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z" />
  </svg>
)

const MaterialViewDayOutlined = props => <Icon as={MaterialViewDayOutlinedSvg} {...props} />

MaterialViewDayOutlined.defaultProps = { ...Icon.defaultProps }

MaterialViewDayOutlined.propTypes = { ...Icon.propTypes }

export default MaterialViewDayOutlined
