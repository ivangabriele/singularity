import React from 'react'

import Icon from '../Icon'

const MaterialWcSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M.01 0h24v24h-24V0z" fill="none" />
    <path d="M5.5 22v-7.5H4V7h7v7.5H9.5V22h-4zM18 22v-6h3l-3-9h-3l-3 9h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z" />
  </svg>
)

const MaterialWcSharp = props => <Icon as={MaterialWcSharpSvg} {...props} />

MaterialWcSharp.defaultProps = { ...Icon.defaultProps }

MaterialWcSharp.propTypes = { ...Icon.propTypes }

export default MaterialWcSharp
