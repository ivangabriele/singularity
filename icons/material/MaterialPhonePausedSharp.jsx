import React from 'react'

import Icon from '../Icon'

const MaterialPhonePausedSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 3h2v7h-2zm4 0h2v7h-2zm-5.79 14.37c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61-2.52 2.52z" />
  </svg>
)

const MaterialPhonePausedSharp = props => <Icon as={MaterialPhonePausedSharpSvg} {...props} />

MaterialPhonePausedSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhonePausedSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhonePausedSharp
