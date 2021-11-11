import React from 'react'

import Icon from '../Icon'

const MaterialCorporateFareSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,7V3H2v18h20V7H12z M10,19H4v-2h6V19z M10,15H4v-2h6V15z M10,11H4V9h6V11z M10,7H4V5h6V7z M20,19h-8V9h8V19z M18,11h-4v2 h4V11z M18,15h-4v2h4V15z" />
  </svg>
)

const MaterialCorporateFareSharp = props => <Icon as={MaterialCorporateFareSharpSvg} {...props} />

MaterialCorporateFareSharp.defaultProps = { ...Icon.defaultProps }

MaterialCorporateFareSharp.propTypes = { ...Icon.propTypes }

export default MaterialCorporateFareSharp
