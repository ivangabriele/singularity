import React from 'react'

import Icon from '../Icon'

const MaterialInsertCommentSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M22 2H2v16h16l4 4V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
  </svg>
)

const MaterialInsertCommentSharp = props => <Icon as={MaterialInsertCommentSharpSvg} {...props} />

MaterialInsertCommentSharp.defaultProps = { ...Icon.defaultProps }

MaterialInsertCommentSharp.propTypes = { ...Icon.propTypes }

export default MaterialInsertCommentSharp
