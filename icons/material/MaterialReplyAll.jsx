import React from 'react'

import Icon from '../Icon'

const MaterialReplyAllSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
  </svg>
)

const MaterialReplyAll = props => <Icon as={MaterialReplyAllSvg} {...props} />

MaterialReplyAll.defaultProps = { ...Icon.defaultProps }

MaterialReplyAll.propTypes = { ...Icon.propTypes }

export default MaterialReplyAll
