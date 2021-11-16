import React from 'react'

import Icon from '../Icon'

const MaterialPermContactCalendarSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-9 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" />
  </svg>
)

const MaterialPermContactCalendarSharp = props => <Icon as={MaterialPermContactCalendarSharpSvg} {...props} />

MaterialPermContactCalendarSharp.defaultProps = { ...Icon.defaultProps }

MaterialPermContactCalendarSharp.propTypes = { ...Icon.propTypes }

export default MaterialPermContactCalendarSharp