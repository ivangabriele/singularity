import React from 'react'

import Icon from '../Icon'

const MaterialWarningRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
  </svg>
)

const MaterialWarningRounded = props => <Icon as={MaterialWarningRoundedSvg} {...props} />

MaterialWarningRounded.defaultProps = { ...Icon.defaultProps }

MaterialWarningRounded.propTypes = { ...Icon.propTypes }

export default MaterialWarningRounded
