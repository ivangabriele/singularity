import React from 'react'

import Icon from '../Icon'

const MaterialKeyboardCapslockSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z" />
  </svg>
)

const MaterialKeyboardCapslock = props => <Icon as={MaterialKeyboardCapslockSvg} {...props} />

MaterialKeyboardCapslock.defaultProps = { ...Icon.defaultProps }

MaterialKeyboardCapslock.propTypes = { ...Icon.propTypes }

export default MaterialKeyboardCapslock