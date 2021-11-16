import React from 'react'

import Icon from '../Icon'

const MaterialVideoLibraryOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z" />
  </svg>
)

const MaterialVideoLibraryOutlined = props => <Icon as={MaterialVideoLibraryOutlinedSvg} {...props} />

MaterialVideoLibraryOutlined.defaultProps = { ...Icon.defaultProps }

MaterialVideoLibraryOutlined.propTypes = { ...Icon.propTypes }

export default MaterialVideoLibraryOutlined