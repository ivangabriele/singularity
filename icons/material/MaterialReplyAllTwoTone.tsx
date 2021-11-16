import React from 'react'

import Icon from '../Icon'

const MaterialReplyAllTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
  </svg>
)

const MaterialReplyAllTwoTone = props => <Icon as={MaterialReplyAllTwoToneSvg} {...props} />

MaterialReplyAllTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialReplyAllTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialReplyAllTwoTone