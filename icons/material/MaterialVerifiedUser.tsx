import React from 'react'

import Icon from '../Icon'

const MaterialVerifiedUserSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
)

const MaterialVerifiedUser = props => <Icon as={MaterialVerifiedUserSvg} {...props} />

MaterialVerifiedUser.defaultProps = { ...Icon.defaultProps }

MaterialVerifiedUser.propTypes = { ...Icon.propTypes }

export default MaterialVerifiedUser