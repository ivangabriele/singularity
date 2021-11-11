import React from 'react'

import Icon from '../Icon'

const MaterialWrapTextSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z" />
  </svg>
)

const MaterialWrapText = props => <Icon as={MaterialWrapTextSvg} {...props} />

MaterialWrapText.defaultProps = { ...Icon.defaultProps }

MaterialWrapText.propTypes = { ...Icon.propTypes }

export default MaterialWrapText
