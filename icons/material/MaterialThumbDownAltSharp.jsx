import React from 'react'

import Icon from '../Icon'

const MaterialThumbDownAltSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
    <path d="M1 11.6V16h8.31l-1.12 5.38L9.83 23 17 15.82V3H4.69zM19 3h4v12h-4z" />
  </svg>
)

const MaterialThumbDownAltSharp = props => <Icon as={MaterialThumbDownAltSharpSvg} {...props} />

MaterialThumbDownAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialThumbDownAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialThumbDownAltSharp
