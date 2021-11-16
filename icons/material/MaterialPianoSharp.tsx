import React from 'react'

import Icon from '../Icon'

const MaterialPianoSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M21,3H3v18h18V3z M13,14.5h1.25V19h-4.5v-4.5H11V5h2V14.5z M5,5h2v9.5h1.25V19H5V5z M19,19h-3.25v-4.5H17V5h2V19z" />
  </svg>
)

const MaterialPianoSharp = props => <Icon as={MaterialPianoSharpSvg} {...props} />

MaterialPianoSharp.defaultProps = { ...Icon.defaultProps }

MaterialPianoSharp.propTypes = { ...Icon.propTypes }

export default MaterialPianoSharp