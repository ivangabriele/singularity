import React from 'react'

import Icon from '../Icon'

const MaterialCreditCardOffSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M6.83,4H22v15.17L14.83,12H20V8h-9.17L6.83,4z M20.49,23.31L17.17,20H2V4.83L0.69,3.51L2.1,2.1l19.8,19.8L20.49,23.31z M9.17,12l-4-4H4v4H9.17z" />
  </svg>
)

const MaterialCreditCardOffSharp = props => <Icon as={MaterialCreditCardOffSharpSvg} {...props} />

MaterialCreditCardOffSharp.defaultProps = { ...Icon.defaultProps }

MaterialCreditCardOffSharp.propTypes = { ...Icon.propTypes }

export default MaterialCreditCardOffSharp
