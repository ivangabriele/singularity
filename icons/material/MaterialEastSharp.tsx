import React from 'react'

import Icon from '../Icon'

const MaterialEastSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
  </svg>
)

const MaterialEastSharp = props => <Icon as={MaterialEastSharpSvg} {...props} />

MaterialEastSharp.defaultProps = { ...Icon.defaultProps }

MaterialEastSharp.propTypes = { ...Icon.propTypes }

export default MaterialEastSharp