import React from 'react'

import Icon from '../Icon'

const MaterialPhoneAndroidTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 4h10v14H7z" opacity=".3" />
    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3-3H7V4h10v14z" />
  </svg>
)

const MaterialPhoneAndroidTwoTone = props => <Icon as={MaterialPhoneAndroidTwoToneSvg} {...props} />

MaterialPhoneAndroidTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPhoneAndroidTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPhoneAndroidTwoTone
