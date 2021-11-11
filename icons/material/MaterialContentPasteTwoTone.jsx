import React from 'react'

import Icon from '../Icon'

const MaterialContentPasteTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 7H7V4H5v16h14V4h-2z" opacity=".3" />
    <path d="M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
  </svg>
)

const MaterialContentPasteTwoTone = props => <Icon as={MaterialContentPasteTwoToneSvg} {...props} />

MaterialContentPasteTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialContentPasteTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialContentPasteTwoTone
