import React from 'react'

import Icon from '../Icon'

const MaterialSignalWifiConnectedNoInternetFourSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98L12,21v-9h8.99L24,8.98z M19.59,14l-2.09,2.09L15.41,14L14,15.41 l2.09,2.09L14,19.59L15.41,21l2.09-2.08L19.59,21L21,19.59l-2.08-2.09L21,15.41L19.59,14z" />
    </g>
  </svg>
)

const MaterialSignalWifiConnectedNoInternetFour = props => (
  <Icon as={MaterialSignalWifiConnectedNoInternetFourSvg} {...props} />
)

MaterialSignalWifiConnectedNoInternetFour.defaultProps = { ...Icon.defaultProps }

MaterialSignalWifiConnectedNoInternetFour.propTypes = { ...Icon.propTypes }

export default MaterialSignalWifiConnectedNoInternetFour
