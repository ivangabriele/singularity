import React from 'react'

import Icon from '../Icon'

const MaterialExpandLessRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z" />
  </svg>
)

const MaterialExpandLessRounded = props => <Icon as={MaterialExpandLessRoundedSvg} {...props} />

MaterialExpandLessRounded.defaultProps = { ...Icon.defaultProps }

MaterialExpandLessRounded.propTypes = { ...Icon.propTypes }

export default MaterialExpandLessRounded
