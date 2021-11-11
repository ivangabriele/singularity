import React from 'react'

import Icon from '../Icon'

const MaterialFormatTextdirectionRToLTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 6c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2z" opacity=".3" />
    <path d="M6 6c0 2.21 1.79 4 4 4v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6zm4 2c-1.1 0-2-.9-2-2s.9-2 2-2v4zM4 18l4 4v-3h12v-2H8v-3z" />
  </svg>
)

const MaterialFormatTextdirectionRToLTwoTone = props => (
  <Icon as={MaterialFormatTextdirectionRToLTwoToneSvg} {...props} />
)

MaterialFormatTextdirectionRToLTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatTextdirectionRToLTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatTextdirectionRToLTwoTone
