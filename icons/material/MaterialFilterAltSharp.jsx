import React from 'react'

import Icon from '../Icon'

const MaterialFilterAltSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24 M24,24H0" fill="none" />
      <path d="M3,4c2.01,2.59,7,9,7,9v7h4v-7c0,0,4.98-6.41,7-9H3z" />
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
  </svg>
)

const MaterialFilterAltSharp = props => <Icon as={MaterialFilterAltSharpSvg} {...props} />

MaterialFilterAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterAltSharp
