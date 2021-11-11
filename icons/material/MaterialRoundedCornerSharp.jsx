import React from 'react'

import Icon from '../Icon'

const MaterialRoundedCornerSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 3H11v2h8v8h2V3z" />
  </svg>
)

const MaterialRoundedCornerSharp = props => <Icon as={MaterialRoundedCornerSharpSvg} {...props} />

MaterialRoundedCornerSharp.defaultProps = { ...Icon.defaultProps }

MaterialRoundedCornerSharp.propTypes = { ...Icon.propTypes }

export default MaterialRoundedCornerSharp
