import React from 'react'

import Icon from '../Icon'

const MaterialCalendarTodayTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z" />
    <path d="M4 5.01h16V8H4z" opacity=".3" />
  </svg>
)

const MaterialCalendarTodayTwoTone = props => <Icon as={MaterialCalendarTodayTwoToneSvg} {...props} />

MaterialCalendarTodayTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialCalendarTodayTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialCalendarTodayTwoTone