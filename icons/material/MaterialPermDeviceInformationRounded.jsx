import React from 'react'

import Icon from '../Icon'

const MaterialPermDeviceInformationRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M13 7h-2v2h2V7zm-1 4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm5-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
  </svg>
)

const MaterialPermDeviceInformationRounded = props => <Icon as={MaterialPermDeviceInformationRoundedSvg} {...props} />

MaterialPermDeviceInformationRounded.defaultProps = { ...Icon.defaultProps }

MaterialPermDeviceInformationRounded.propTypes = { ...Icon.propTypes }

export default MaterialPermDeviceInformationRounded
