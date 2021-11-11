import React from 'react'

import Icon from '../Icon'

const MaterialOpenWithTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" />
  </svg>
)

const MaterialOpenWithTwoTone = props => <Icon as={MaterialOpenWithTwoToneSvg} {...props} />

MaterialOpenWithTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialOpenWithTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialOpenWithTwoTone
