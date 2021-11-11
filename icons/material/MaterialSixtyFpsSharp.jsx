import React from 'react'

import Icon from '../Icon'

const MaterialSixtyFpsSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M19,8v8h-4V8H19 M22,5H12v14h10V5z M10,8V5H2v14h9v-9H5V8H10z M8,13v3H5v-3H8z" />
      </g>
    </g>
  </svg>
)

const MaterialSixtyFpsSharp = props => <Icon as={MaterialSixtyFpsSharpSvg} {...props} />

MaterialSixtyFpsSharp.defaultProps = { ...Icon.defaultProps }

MaterialSixtyFpsSharp.propTypes = { ...Icon.propTypes }

export default MaterialSixtyFpsSharp
