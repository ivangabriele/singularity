import React from 'react'

import Icon from '../Icon'

const MaterialWarningTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z" opacity=".3" />
    <path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z" />
  </svg>
)

const MaterialWarningTwoTone = props => <Icon as={MaterialWarningTwoToneSvg} {...props} />

MaterialWarningTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialWarningTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialWarningTwoTone