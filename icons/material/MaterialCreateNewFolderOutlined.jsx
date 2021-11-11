import React from 'react'

import Icon from '../Icon'

const MaterialCreateNewFolderOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z" />
  </svg>
)

const MaterialCreateNewFolderOutlined = props => <Icon as={MaterialCreateNewFolderOutlinedSvg} {...props} />

MaterialCreateNewFolderOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCreateNewFolderOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCreateNewFolderOutlined
