import React from 'react'

import Icon from '../Icon'

const MaterialAddLinkSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0" fill="none" />
    <path d="M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
  </svg>
)

const MaterialAddLink = props => <Icon as={MaterialAddLinkSvg} {...props} />

MaterialAddLink.defaultProps = { ...Icon.defaultProps }

MaterialAddLink.propTypes = { ...Icon.propTypes }

export default MaterialAddLink