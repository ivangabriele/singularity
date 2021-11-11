import React from 'react'

import Icon from '../Icon'

const MaterialRemoveFromQueueSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 3H1v16h7v2h8v-2h7V3zm-2 14H3V5h18v12zm-5-7v2H8v-2h8z" />
  </svg>
)

const MaterialRemoveFromQueueSharp = props => <Icon as={MaterialRemoveFromQueueSharpSvg} {...props} />

MaterialRemoveFromQueueSharp.defaultProps = { ...Icon.defaultProps }

MaterialRemoveFromQueueSharp.propTypes = { ...Icon.propTypes }

export default MaterialRemoveFromQueueSharp
