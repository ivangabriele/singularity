import React from 'react'

import Icon from '../Icon'

const MaterialPivotTableChartSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 8h11V5c0-1.1-.9-2-2-2h-9v5zM3 8h5V3H5c-1.1 0-2 .9-2 2v3zm2 13h3V10H3v9c0 1.1.9 2 2 2zm8 1l-4-4 4-4zm1-9l4-4 4 4z" />
    <path d="M14.58 19H13v-2h1.58c1.33 0 2.42-1.08 2.42-2.42V13h2v1.58c0 2.44-1.98 4.42-4.42 4.42z" />
  </svg>
)

const MaterialPivotTableChart = props => <Icon as={MaterialPivotTableChartSvg} {...props} />

MaterialPivotTableChart.defaultProps = { ...Icon.defaultProps }

MaterialPivotTableChart.propTypes = { ...Icon.propTypes }

export default MaterialPivotTableChart
