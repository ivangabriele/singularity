import React from 'react'

import Icon from '../Icon'

const MaterialSubdirectoryArrowLeftRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5.71 15.71l4.58 4.58c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42L8.83 16H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v9H8.83l2.88-2.87c.39-.39.39-1.03 0-1.42-.39-.39-1.03-.39-1.42 0l-4.58 4.58c-.39.39-.39 1.03 0 1.42z" />
  </svg>
)

const MaterialSubdirectoryArrowLeftRounded = props => <Icon as={MaterialSubdirectoryArrowLeftRoundedSvg} {...props} />

MaterialSubdirectoryArrowLeftRounded.defaultProps = { ...Icon.defaultProps }

MaterialSubdirectoryArrowLeftRounded.propTypes = { ...Icon.propTypes }

export default MaterialSubdirectoryArrowLeftRounded
