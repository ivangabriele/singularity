import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardArrowRightRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
  </svg>
)

const MaterialKeyboardArrowRightRounded = props => <Icon as={MaterialKeyboardArrowRightRoundedSvg} {...props} />

MaterialKeyboardArrowRightRounded.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardArrowRightRounded.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardArrowRightRounded
