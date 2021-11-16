import React from 'react'

import Icon from '../Icon'

const MaterialPregnantWomanSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z" />
  </svg>
)

const MaterialPregnantWomanSharp = props => <Icon as={MaterialPregnantWomanSharpSvg} {...props} />

MaterialPregnantWomanSharp.defaultProps = { ...Icon.defaultProps }

MaterialPregnantWomanSharp.propTypes = { ...Icon.propTypes }

export default MaterialPregnantWomanSharp