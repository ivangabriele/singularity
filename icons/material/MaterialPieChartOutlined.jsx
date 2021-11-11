import React from 'react'

import Icon from '../Icon'

const MaterialPieChartOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z" />
  </svg>
)

const MaterialPieChartOutlined = props => <Icon as={MaterialPieChartOutlinedSvg} {...props} />

MaterialPieChartOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPieChartOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPieChartOutlined
