import React from 'react'

import Icon from '../Icon'

const MaterialBubbleChartSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <circle cx="7.2" cy="14.4" r="3.2" />
    <circle cx="14.8" cy="18" r="2" />
    <circle cx="15.2" cy="8.8" r="4.8" />
  </svg>
)

const MaterialBubbleChartSharp = props => <Icon as={MaterialBubbleChartSharpSvg} {...props} />

MaterialBubbleChartSharp.defaultProps = { ...Icon.defaultProps }

MaterialBubbleChartSharp.propTypes = { ...Icon.propTypes }

export default MaterialBubbleChartSharp
