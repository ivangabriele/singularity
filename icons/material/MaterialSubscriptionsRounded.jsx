import React from 'react'

import Icon from '../Icon'

const MaterialSubscriptionsRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M19 8H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1zm-2-6H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm5 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6.81 3.56L10 12.73v6.53l5.19-2.82c.35-.19.35-.69 0-.88z" />
  </svg>
)

const MaterialSubscriptionsRounded = props => <Icon as={MaterialSubscriptionsRoundedSvg} {...props} />

MaterialSubscriptionsRounded.defaultProps = { ...Icon.defaultProps }

MaterialSubscriptionsRounded.propTypes = { ...Icon.propTypes }

export default MaterialSubscriptionsRounded
