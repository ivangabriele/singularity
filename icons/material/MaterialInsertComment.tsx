import React from 'react'

import Icon from '../Icon'

const MaterialInsertCommentSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
  </svg>
)

const MaterialInsertComment = props => <Icon as={MaterialInsertCommentSvg} {...props} />

MaterialInsertComment.defaultProps = { ...Icon.defaultProps }

MaterialInsertComment.propTypes = { ...Icon.propTypes }

export default MaterialInsertComment