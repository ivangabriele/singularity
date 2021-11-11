import React from 'react'

import Icon from '../Icon'

const MaterialPollSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3v18h18V3H3zm6 14H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
)

const MaterialPollSharp = props => <Icon as={MaterialPollSharpSvg} {...props} />

MaterialPollSharp.defaultProps = { ...Icon.defaultProps }

MaterialPollSharp.propTypes = { ...Icon.propTypes }

export default MaterialPollSharp
