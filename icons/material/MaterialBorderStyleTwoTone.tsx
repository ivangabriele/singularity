import React from 'react'

import Icon from '../Icon'

const MaterialBorderStyleTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 19h2v2h-2zm0-8h2v2h-2zm0 4h2v2h-2zm-4 4h2v2h-2zM3 21h2V5h16V3H3zM19 7h2v2h-2zm-8 12h2v2h-2zm-4 0h2v2H7z" />
  </svg>
)

const MaterialBorderStyleTwoTone = props => <Icon as={MaterialBorderStyleTwoToneSvg} {...props} />

MaterialBorderStyleTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialBorderStyleTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialBorderStyleTwoTone