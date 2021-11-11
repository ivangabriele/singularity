import React from 'react'

import Icon from '../Icon'

const MaterialImportExportOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
  </svg>
)

const MaterialImportExportOutlined = props => <Icon as={MaterialImportExportOutlinedSvg} {...props} />

MaterialImportExportOutlined.defaultProps = { ...Icon.defaultProps }

MaterialImportExportOutlined.propTypes = { ...Icon.propTypes }

export default MaterialImportExportOutlined
