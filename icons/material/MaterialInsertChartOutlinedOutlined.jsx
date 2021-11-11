import React from 'react'

import Icon from '../Icon'

const MaterialInsertChartOutlinedOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2 2H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
)

const MaterialInsertChartOutlinedOutlined = props => <Icon as={MaterialInsertChartOutlinedOutlinedSvg} {...props} />

MaterialInsertChartOutlinedOutlined.defaultProps = { ...Icon.defaultProps }

MaterialInsertChartOutlinedOutlined.propTypes = { ...Icon.propTypes }

export default MaterialInsertChartOutlinedOutlined
