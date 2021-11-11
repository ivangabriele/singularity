import React from 'react'

import Icon from '../Icon'

const MaterialToggleOffRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </svg>
)

const MaterialToggleOffRounded = props => <Icon as={MaterialToggleOffRoundedSvg} {...props} />

MaterialToggleOffRounded.defaultProps = { ...Icon.defaultProps }

MaterialToggleOffRounded.propTypes = { ...Icon.propTypes }

export default MaterialToggleOffRounded
