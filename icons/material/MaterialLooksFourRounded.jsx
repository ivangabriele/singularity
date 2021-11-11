import React from 'react'

import Icon from '../Icon'

const MaterialLooksFourRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M.04 0h24v24h-24V0z" fill="none" />
    <path d="M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14c-.55 0-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3h2V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1z" />
  </svg>
)

const MaterialLooksFourRounded = props => <Icon as={MaterialLooksFourRoundedSvg} {...props} />

MaterialLooksFourRounded.defaultProps = { ...Icon.defaultProps }

MaterialLooksFourRounded.propTypes = { ...Icon.propTypes }

export default MaterialLooksFourRounded
