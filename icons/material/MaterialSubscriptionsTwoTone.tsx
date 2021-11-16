import React from 'react'

import Icon from '../Icon'

const MaterialSubscriptionsTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 20h16v-8H4v8zm6-7.27L16 16l-6 3.26v-6.53z" opacity=".3" />
    <path d="M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z" />
  </svg>
)

const MaterialSubscriptionsTwoTone = props => <Icon as={MaterialSubscriptionsTwoToneSvg} {...props} />

MaterialSubscriptionsTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialSubscriptionsTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialSubscriptionsTwoTone