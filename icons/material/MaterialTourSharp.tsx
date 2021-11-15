import React from 'react'

import Icon from '../Icon'

const MaterialTourSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" y="0" />
      <path d="M21,4h-8h-1H7V2H5v2v10v8h2v-8h4h1h9l-2-5L21,4z M15,9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S15,7.9,15,9z" />
    </g>
  </svg>
)

const MaterialTourSharp = props => <Icon as={MaterialTourSharpSvg} {...props} />

MaterialTourSharp.defaultProps = { ...Icon.defaultProps }

MaterialTourSharp.propTypes = { ...Icon.propTypes }

export default MaterialTourSharp
