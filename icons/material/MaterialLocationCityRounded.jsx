import React from 'react'

import Icon from '../Icon'

const MaterialLocationCityRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 11V5.83c0-.53-.21-1.04-.59-1.41L12.7 2.71c-.39-.39-1.02-.39-1.41 0l-1.7 1.7C9.21 4.79 9 5.3 9 5.83V7H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-4zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
  </svg>
)

const MaterialLocationCityRounded = props => <Icon as={MaterialLocationCityRoundedSvg} {...props} />

MaterialLocationCityRounded.defaultProps = { ...Icon.defaultProps }

MaterialLocationCityRounded.propTypes = { ...Icon.propTypes }

export default MaterialLocationCityRounded
