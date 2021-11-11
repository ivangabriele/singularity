import React from 'react'

import Icon from '../Icon'

const MaterialLibraryAddCheckSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M22,2H6v16h16V2z M12.47,14L9,10.5l1.4-1.41l2.07,2.08L17.6,6L19,7.41L12.47,14z M4,6H2v16h16v-2H4V6z" />
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
  </svg>
)

const MaterialLibraryAddCheckSharp = props => <Icon as={MaterialLibraryAddCheckSharpSvg} {...props} />

MaterialLibraryAddCheckSharp.defaultProps = { ...Icon.defaultProps }

MaterialLibraryAddCheckSharp.propTypes = { ...Icon.propTypes }

export default MaterialLibraryAddCheckSharp
