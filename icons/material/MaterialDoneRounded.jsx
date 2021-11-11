import React from 'react'

import Icon from '../Icon'

const MaterialDoneRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" />
  </svg>
)

const MaterialDoneRounded = props => <Icon as={MaterialDoneRoundedSvg} {...props} />

MaterialDoneRounded.defaultProps = { ...Icon.defaultProps }

MaterialDoneRounded.propTypes = { ...Icon.propTypes }

export default MaterialDoneRounded
