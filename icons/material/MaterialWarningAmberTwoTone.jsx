import React from 'react'

import Icon from '../Icon'

const MaterialWarningAmberTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z" />
  </svg>
)

const MaterialWarningAmberTwoTone = props => <Icon as={MaterialWarningAmberTwoToneSvg} {...props} />

MaterialWarningAmberTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialWarningAmberTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialWarningAmberTwoTone
