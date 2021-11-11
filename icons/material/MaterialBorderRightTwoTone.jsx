import React from 'react'

import Icon from '../Icon'

const MaterialBorderRightTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h2v2H3zm0 16h2v2H3zM15 3h2v2h-2zm0 16h2v2h-2zm0-8h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm8 8h2v2h-2zm-4-4h2v2H7zm0-8h2v2H7zm12 0h2v18h-2zM7 19h2v2H7zm4-16h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2z" />
  </svg>
)

const MaterialBorderRightTwoTone = props => <Icon as={MaterialBorderRightTwoToneSvg} {...props} />

MaterialBorderRightTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialBorderRightTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialBorderRightTwoTone
