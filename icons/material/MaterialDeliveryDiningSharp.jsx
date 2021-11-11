import React from 'react'

import Icon from '../Icon'

const MaterialDeliveryDiningSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <g>
        <g>
          <path d="M19,10.35V5h-5v2h3v2.65L13.52,14H10V9H2v7h2c0,1.66,1.34,3,3,3s3-1.34,3-3h4.48L19,10.35z M7,17c-0.55,0-1-0.45-1-1h2 C8,16.55,7.55,17,7,17z" />
          <rect height="2" width="5" x="5" y="6" />
          <path d="M19,13c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,13,19,13z M19,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 C20,16.55,19.55,17,19,17z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialDeliveryDiningSharp = props => <Icon as={MaterialDeliveryDiningSharpSvg} {...props} />

MaterialDeliveryDiningSharp.defaultProps = { ...Icon.defaultProps }

MaterialDeliveryDiningSharp.propTypes = { ...Icon.propTypes }

export default MaterialDeliveryDiningSharp
