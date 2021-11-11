import React from 'react'

import Icon from '../Icon'

const MaterialPlusOneTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4V8zm4.5-1.92V7.9l2.5-.5V18h2V5l-4.5 1.08z" />
  </svg>
)

const MaterialPlusOneTwoTone = props => <Icon as={MaterialPlusOneTwoToneSvg} {...props} />

MaterialPlusOneTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPlusOneTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPlusOneTwoTone
