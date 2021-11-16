import React from 'react'

import Icon from '../Icon'

const MaterialEdgesensorLowSharpSvg = props => (
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
        <path d="M2,7h2v7H2V7z M20,10h2v7h-2V10z M6,2v20h12V2H6z M16,17H8V7h8V17z" />
      </g>
    </g>
  </svg>
)

const MaterialEdgesensorLowSharp = props => <Icon as={MaterialEdgesensorLowSharpSvg} {...props} />

MaterialEdgesensorLowSharp.defaultProps = { ...Icon.defaultProps }

MaterialEdgesensorLowSharp.propTypes = { ...Icon.propTypes }

export default MaterialEdgesensorLowSharp