import React from 'react'

import Icon from '../Icon'

const MaterialPivotTableChartSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <rect height="5" width="11" x="10" y="3" />
        <rect height="11" width="5" x="3" y="10" />
        <rect height="5" width="5" x="3" y="3" />
        <polygon points="18,9 14,13 17,13 17,17 13,17 13,14 9,18 13,22 13,19 19,19 19,13 22,13" />
      </g>
    </g>
  </svg>
)

const MaterialPivotTableChartSharp = props => <Icon as={MaterialPivotTableChartSharpSvg} {...props} />

MaterialPivotTableChartSharp.defaultProps = { ...Icon.defaultProps }

MaterialPivotTableChartSharp.propTypes = { ...Icon.propTypes }

export default MaterialPivotTableChartSharp