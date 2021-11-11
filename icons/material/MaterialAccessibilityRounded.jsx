import React from 'react'

import Icon from '../Icon'

const MaterialAccessibilityRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8 7h-5v12c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2v5c0 .55-.45 1-1 1s-1-.45-1-1V9H4c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
)

const MaterialAccessibilityRounded = props => <Icon as={MaterialAccessibilityRoundedSvg} {...props} />

MaterialAccessibilityRounded.defaultProps = { ...Icon.defaultProps }

MaterialAccessibilityRounded.propTypes = { ...Icon.propTypes }

export default MaterialAccessibilityRounded
