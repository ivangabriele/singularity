import React from 'react'

import Icon from '../Icon'

const MaterialPermScanWifiSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z" />
  </svg>
)

const MaterialPermScanWifi = props => <Icon as={MaterialPermScanWifiSvg} {...props} />

MaterialPermScanWifi.defaultProps = { ...Icon.defaultProps }

MaterialPermScanWifi.propTypes = { ...Icon.propTypes }

export default MaterialPermScanWifi
