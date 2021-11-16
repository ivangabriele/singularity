import React from 'react'

import Icon from '../Icon'

const MaterialTableChartSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" />
  </svg>
)

const MaterialTableChart = props => <Icon as={MaterialTableChartSvg} {...props} />

MaterialTableChart.defaultProps = { ...Icon.defaultProps }

MaterialTableChart.propTypes = { ...Icon.propTypes }

export default MaterialTableChart