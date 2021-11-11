import React from 'react'

import Icon from '../Icon'

const MaterialFoodBankSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,3L4,9v12h16V9L12,3z M12.5,12.5c0,0.83-0.67,1.5-1.5,1.5v4h-1v-4c-0.83,0-1.5-0.67-1.5-1.5v-3h1v3H10v-3h1v3h0.5v-3h1 V12.5z M15,18h-1v-3.5h-1v-3c0-1.1,0.9-2,2-2V18z" />
  </svg>
)

const MaterialFoodBankSharp = props => <Icon as={MaterialFoodBankSharpSvg} {...props} />

MaterialFoodBankSharp.defaultProps = { ...Icon.defaultProps }

MaterialFoodBankSharp.propTypes = { ...Icon.propTypes }

export default MaterialFoodBankSharp
