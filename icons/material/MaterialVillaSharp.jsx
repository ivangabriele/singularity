import React from 'react'

import Icon from '../Icon'

const MaterialVillaSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M7,21H3V8l13-5v7H7V21z M19,10c-1.1,0-2,0.9-2,2H9v9h5v-5h2v5h5v-9C21,10.9,20.1,10,19,10z" />
  </svg>
)

const MaterialVillaSharp = props => <Icon as={MaterialVillaSharpSvg} {...props} />

MaterialVillaSharp.defaultProps = { ...Icon.defaultProps }

MaterialVillaSharp.propTypes = { ...Icon.propTypes }

export default MaterialVillaSharp
