import React from 'react'

import Icon from '../Icon'

const MaterialAnnouncementOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z" />
  </svg>
)

const MaterialAnnouncementOutlined = props => <Icon as={MaterialAnnouncementOutlinedSvg} {...props} />

MaterialAnnouncementOutlined.defaultProps = { ...Icon.defaultProps }

MaterialAnnouncementOutlined.propTypes = { ...Icon.propTypes }

export default MaterialAnnouncementOutlined
