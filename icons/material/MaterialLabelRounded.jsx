import React from 'react'

import Icon from '../Icon'

const MaterialLabelRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58c.25-.35.25-.81 0-1.16l-3.96-5.58z" />
  </svg>
)

const MaterialLabelRounded = props => <Icon as={MaterialLabelRoundedSvg} {...props} />

MaterialLabelRounded.defaultProps = { ...Icon.defaultProps }

MaterialLabelRounded.propTypes = { ...Icon.propTypes }

export default MaterialLabelRounded
