import React from 'react'

import Icon from '../Icon'

const MaterialNoMeetingRoomSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 6h3v7.88l2 2V4h-5V3H6.12L14 10.88zm-2 5.71V13h-2v-2h1.29L2.41 2.13 1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41z" />
  </svg>
)

const MaterialNoMeetingRoomSharp = props => <Icon as={MaterialNoMeetingRoomSharpSvg} {...props} />

MaterialNoMeetingRoomSharp.defaultProps = { ...Icon.defaultProps }

MaterialNoMeetingRoomSharp.propTypes = { ...Icon.propTypes }

export default MaterialNoMeetingRoomSharp
