import React from 'react'

import Icon from '../Icon'

const MaterialPersonRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
  </svg>
)

const MaterialPersonRounded = props => <Icon as={MaterialPersonRoundedSvg} {...props} />

MaterialPersonRounded.defaultProps = { ...Icon.defaultProps }

MaterialPersonRounded.propTypes = { ...Icon.propTypes }

export default MaterialPersonRounded
