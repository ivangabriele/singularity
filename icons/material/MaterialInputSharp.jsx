import React from 'react'

import Icon from '../Icon'

const MaterialInputSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <g fill="none">
      <path d="M0 0h24v24H0V0z" />
      <path d="M0 0h24v24H0V0z" opacity=".87" />
    </g>
    <path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3zM23 3.01H1V9h2V4.99h18v14.03H3V15H1v5.99h22V3.01zM11 16l4-4-4-4v3H1v2h10v3z" />
  </svg>
)

const MaterialInputSharp = props => <Icon as={MaterialInputSharpSvg} {...props} />

MaterialInputSharp.defaultProps = { ...Icon.defaultProps }

MaterialInputSharp.propTypes = { ...Icon.propTypes }

export default MaterialInputSharp
