import React from 'react'

import Icon from '../Icon'

const MaterialSavingsSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <g>
      <path d="M19.83,7.5l-2.27-2.27c0.07-0.42,0.18-0.81,0.32-1.15c0.23-0.56,0.56-1.06,0.97-1.5C18.15,2.21,17.35,2,16.5,2 c-1.64,0-3.09,0.79-4,2l-5,0C4.46,4,2,6.46,2,9.5S4.5,21,4.5,21l5.5,0v-2h2v2l5.5,0l1.68-5.59L22,14.47V7.5H19.83z M13,9H8V7h5V9z M16,11c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C17,10.55,16.55,11,16,11z" />
    </g>
  </svg>
)

const MaterialSavingsSharp = props => <Icon as={MaterialSavingsSharpSvg} {...props} />

MaterialSavingsSharp.defaultProps = { ...Icon.defaultProps }

MaterialSavingsSharp.propTypes = { ...Icon.propTypes }

export default MaterialSavingsSharp
