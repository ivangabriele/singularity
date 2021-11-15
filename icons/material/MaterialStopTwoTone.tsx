import React from 'react'

import Icon from '../Icon'

const MaterialStopTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 8h8v8H8z" opacity=".3" />
    <path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" />
  </svg>
)

const MaterialStopTwoTone = props => <Icon as={MaterialStopTwoToneSvg} {...props} />

MaterialStopTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialStopTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialStopTwoTone
