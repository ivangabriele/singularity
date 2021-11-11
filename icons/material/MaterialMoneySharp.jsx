import React from 'react'

import Icon from '../Icon'

const MaterialMoneySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 16h5V8h-5v8zm2-6h1v4h-1v-4zm-8 6h5V8H8v8zm2-6h1v4h-1v-4zM5 8h2v8H5zM2 4v16h20V4H2zm18 14H4V6h16v12z" />
  </svg>
)

const MaterialMoneySharp = props => <Icon as={MaterialMoneySharpSvg} {...props} />

MaterialMoneySharp.defaultProps = { ...Icon.defaultProps }

MaterialMoneySharp.propTypes = { ...Icon.propTypes }

export default MaterialMoneySharp
