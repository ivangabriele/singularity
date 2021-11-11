import React from 'react'

import Icon from '../Icon'

const MaterialDownloadOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" />
  </svg>
)

const MaterialDownloadOutlined = props => <Icon as={MaterialDownloadOutlinedSvg} {...props} />

MaterialDownloadOutlined.defaultProps = { ...Icon.defaultProps }

MaterialDownloadOutlined.propTypes = { ...Icon.propTypes }

export default MaterialDownloadOutlined
