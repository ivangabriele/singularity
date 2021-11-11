import React from 'react'

import Icon from '../Icon'

const MaterialThumbDownSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M9.83 23L17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z" />
  </svg>
)

const MaterialThumbDownSharp = props => <Icon as={MaterialThumbDownSharpSvg} {...props} />

MaterialThumbDownSharp.defaultProps = { ...Icon.defaultProps }

MaterialThumbDownSharp.propTypes = { ...Icon.propTypes }

export default MaterialThumbDownSharp
