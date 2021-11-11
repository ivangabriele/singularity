import React from 'react'

import Icon from '../Icon'

const MaterialTodayTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-7 4H7v5h5v-5z" />
    <path d="M5 5h14v2H5z" opacity=".3" />
  </svg>
)

const MaterialTodayTwoTone = props => <Icon as={MaterialTodayTwoToneSvg} {...props} />

MaterialTodayTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialTodayTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialTodayTwoTone
