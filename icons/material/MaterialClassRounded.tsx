import React from 'react'

import Icon from '../Icon'

const MaterialClassRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
  </svg>
)

const MaterialClassRounded = props => <Icon as={MaterialClassRoundedSvg} {...props} />

MaterialClassRounded.defaultProps = { ...Icon.defaultProps }

MaterialClassRounded.propTypes = { ...Icon.propTypes }

export default MaterialClassRounded