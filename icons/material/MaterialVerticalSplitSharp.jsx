import React from 'react'

import Icon from '../Icon'

const MaterialVerticalSplitSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z" />
  </svg>
)

const MaterialVerticalSplitSharp = props => <Icon as={MaterialVerticalSplitSharpSvg} {...props} />

MaterialVerticalSplitSharp.defaultProps = { ...Icon.defaultProps }

MaterialVerticalSplitSharp.propTypes = { ...Icon.propTypes }

export default MaterialVerticalSplitSharp
