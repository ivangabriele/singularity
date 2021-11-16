import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardCapslockRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M12 8.41l3.89 3.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.71 6.3c-.39-.39-1.02-.39-1.41 0l-4.6 4.59c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 8.41zM7 18h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z" />
  </svg>
)

const MaterialKeyboardCapslockRounded = props => <Icon as={MaterialKeyboardCapslockRoundedSvg} {...props} />

MaterialKeyboardCapslockRounded.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardCapslockRounded.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardCapslockRounded