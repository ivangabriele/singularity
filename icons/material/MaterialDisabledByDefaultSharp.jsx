import React from 'react'

import Icon from '../Icon'

const MaterialDisabledByDefaultSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12 L17,15.59z" />
  </svg>
)

const MaterialDisabledByDefaultSharp = props => <Icon as={MaterialDisabledByDefaultSharpSvg} {...props} />

MaterialDisabledByDefaultSharp.defaultProps = { ...Icon.defaultProps }

MaterialDisabledByDefaultSharp.propTypes = { ...Icon.propTypes }

export default MaterialDisabledByDefaultSharp
