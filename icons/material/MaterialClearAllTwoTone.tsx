import React from 'react'

import Icon from '../Icon'

const MaterialClearAllTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z" />
  </svg>
)

const MaterialClearAllTwoTone = props => <Icon as={MaterialClearAllTwoToneSvg} {...props} />

MaterialClearAllTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialClearAllTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialClearAllTwoTone