import React from 'react'

import Icon from '../Icon'

const MaterialStackedBarChartSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z" />
    </g>
  </svg>
)

const MaterialStackedBarChartSharp = props => <Icon as={MaterialStackedBarChartSharpSvg} {...props} />

MaterialStackedBarChartSharp.defaultProps = { ...Icon.defaultProps }

MaterialStackedBarChartSharp.propTypes = { ...Icon.propTypes }

export default MaterialStackedBarChartSharp
