import React from 'react'

import Icon from '../Icon'

const MaterialViewCompactRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 19h4v-7H3v5c0 1.1.9 2 2 2zm5 0h10c1.1 0 2-.9 2-2v-5H10v7zM3 7v4h19V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z" />
  </svg>
)

const MaterialViewCompactRounded = props => <Icon as={MaterialViewCompactRoundedSvg} {...props} />

MaterialViewCompactRounded.defaultProps = { ...Icon.defaultProps }

MaterialViewCompactRounded.propTypes = { ...Icon.propTypes }

export default MaterialViewCompactRounded
