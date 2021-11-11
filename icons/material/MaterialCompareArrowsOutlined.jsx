import React from 'react'

import Icon from '../Icon'

const MaterialCompareArrowsOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" />
  </svg>
)

const MaterialCompareArrowsOutlined = props => <Icon as={MaterialCompareArrowsOutlinedSvg} {...props} />

MaterialCompareArrowsOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCompareArrowsOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCompareArrowsOutlined
