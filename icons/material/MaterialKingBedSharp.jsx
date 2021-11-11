import React from 'react'

import Icon from '../Icon'

const MaterialKingBedSharpSvg = props => (
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
      <g>
        <rect fill="none" height="3" width="5" x="6" y="7" />
        <rect fill="none" height="3" width="5" x="13" y="7" />
        <path d="M20,10V5H4v5H2v7h1.33L4,19h1l0.67-2h12.67L19,19h1l0.67-2H22v-7H20z M11,10H6V7h5V10z M18,10h-5V7h5V10z" />
      </g>
    </g>
  </svg>
)

const MaterialKingBedSharp = props => <Icon as={MaterialKingBedSharpSvg} {...props} />

MaterialKingBedSharp.defaultProps = { ...Icon.defaultProps }

MaterialKingBedSharp.propTypes = { ...Icon.propTypes }

export default MaterialKingBedSharp
