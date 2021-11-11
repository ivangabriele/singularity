import React from 'react'

import Icon from '../Icon'

const MaterialTwoKPlusSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M21,3H3v18h18V3z M10,12.5H7.5v1H10V15H6v-3.5h2.5v-1H6V9h4V12.5z M14.25,15l-1.75-2.25V15H11V9h1.5v2.25L14.25,9H16 l-2.25,3L16,15H14.25z M19,12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z" />
    </g>
  </svg>
)

const MaterialTwoKPlusSharp = props => <Icon as={MaterialTwoKPlusSharpSvg} {...props} />

MaterialTwoKPlusSharp.defaultProps = { ...Icon.defaultProps }

MaterialTwoKPlusSharp.propTypes = { ...Icon.propTypes }

export default MaterialTwoKPlusSharp
