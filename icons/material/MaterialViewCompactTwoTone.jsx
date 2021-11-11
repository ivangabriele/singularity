import React from 'react'

import Icon from '../Icon'

const MaterialViewCompactTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z" opacity=".3" />
    <path d="M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z" />
  </svg>
)

const MaterialViewCompactTwoTone = props => <Icon as={MaterialViewCompactTwoToneSvg} {...props} />

MaterialViewCompactTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialViewCompactTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialViewCompactTwoTone
