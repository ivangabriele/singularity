import React from 'react'

import Icon from '../Icon'

const MaterialReplySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
  </svg>
)

const MaterialReplySharp = props => <Icon as={MaterialReplySharpSvg} {...props} />

MaterialReplySharp.defaultProps = { ...Icon.defaultProps }

MaterialReplySharp.propTypes = { ...Icon.propTypes }

export default MaterialReplySharp
