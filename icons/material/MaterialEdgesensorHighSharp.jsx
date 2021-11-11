import React from 'react'

import Icon from '../Icon'

const MaterialEdgesensorHighSharpSvg = props => (
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
        <path d="M3,7h2v7H3V7z M0,10h2v7H0V10z M22,7h2v7h-2V7z M19,10h2v7h-2V10z M18,2H6v20h12V2z M16,17H8V7h8V17z" />
      </g>
    </g>
  </svg>
)

const MaterialEdgesensorHighSharp = props => <Icon as={MaterialEdgesensorHighSharpSvg} {...props} />

MaterialEdgesensorHighSharp.defaultProps = { ...Icon.defaultProps }

MaterialEdgesensorHighSharp.propTypes = { ...Icon.propTypes }

export default MaterialEdgesensorHighSharp
