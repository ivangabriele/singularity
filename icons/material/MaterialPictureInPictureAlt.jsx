import React from 'react'

import Icon from '../Icon'

const MaterialPictureInPictureAltSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z" />
  </svg>
)

const MaterialPictureInPictureAlt = props => <Icon as={MaterialPictureInPictureAltSvg} {...props} />

MaterialPictureInPictureAlt.defaultProps = { ...Icon.defaultProps }

MaterialPictureInPictureAlt.propTypes = { ...Icon.propTypes }

export default MaterialPictureInPictureAlt
