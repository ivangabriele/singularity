import React from 'react'

import Icon from '../Icon'

const MaterialCallMissedTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 10.41l7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z" />
  </svg>
)

const MaterialCallMissedTwoTone = props => <Icon as={MaterialCallMissedTwoToneSvg} {...props} />

MaterialCallMissedTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialCallMissedTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialCallMissedTwoTone
