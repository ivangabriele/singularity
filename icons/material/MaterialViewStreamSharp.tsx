import React from 'react'

import Icon from '../Icon'

const MaterialViewStreamSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M3,19v-6h18v6H3z M3,5v6h18V5H3z" />
  </svg>
)

const MaterialViewStreamSharp = props => <Icon as={MaterialViewStreamSharpSvg} {...props} />

MaterialViewStreamSharp.defaultProps = { ...Icon.defaultProps }

MaterialViewStreamSharp.propTypes = { ...Icon.propTypes }

export default MaterialViewStreamSharp