import React from 'react'

import Icon from '../Icon'

const MaterialAssignmentReturnedSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18V3zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z" />
  </svg>
)

const MaterialAssignmentReturnedSharp = props => <Icon as={MaterialAssignmentReturnedSharpSvg} {...props} />

MaterialAssignmentReturnedSharp.defaultProps = { ...Icon.defaultProps }

MaterialAssignmentReturnedSharp.propTypes = { ...Icon.propTypes }

export default MaterialAssignmentReturnedSharp
