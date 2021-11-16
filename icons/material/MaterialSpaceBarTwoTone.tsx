import React from 'react'

import Icon from '../Icon'

const MaterialSpaceBarTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 13H6V9H4v6h16V9h-2z" />
  </svg>
)

const MaterialSpaceBarTwoTone = props => <Icon as={MaterialSpaceBarTwoToneSvg} {...props} />

MaterialSpaceBarTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialSpaceBarTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialSpaceBarTwoTone