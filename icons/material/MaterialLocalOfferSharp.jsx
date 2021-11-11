import React from 'react'

import Icon from '../Icon'

const MaterialLocalOfferSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22.83 12.99L11.83 2H2v9.83l10.99 10.99 9.84-9.83zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
  </svg>
)

const MaterialLocalOfferSharp = props => <Icon as={MaterialLocalOfferSharpSvg} {...props} />

MaterialLocalOfferSharp.defaultProps = { ...Icon.defaultProps }

MaterialLocalOfferSharp.propTypes = { ...Icon.propTypes }

export default MaterialLocalOfferSharp
