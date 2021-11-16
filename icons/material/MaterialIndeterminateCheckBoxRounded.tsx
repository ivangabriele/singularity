import React from 'react'

import Icon from '../Icon'

const MaterialIndeterminateCheckBoxRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
)

const MaterialIndeterminateCheckBoxRounded = props => <Icon as={MaterialIndeterminateCheckBoxRoundedSvg} {...props} />

MaterialIndeterminateCheckBoxRounded.defaultProps = { ...Icon.defaultProps }

MaterialIndeterminateCheckBoxRounded.propTypes = { ...Icon.propTypes }

export default MaterialIndeterminateCheckBoxRounded