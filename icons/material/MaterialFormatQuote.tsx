import React from 'react'

import Icon from '../Icon'

const MaterialFormatQuoteSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
)

const MaterialFormatQuote = props => <Icon as={MaterialFormatQuoteSvg} {...props} />

MaterialFormatQuote.defaultProps = { ...Icon.defaultProps }

MaterialFormatQuote.propTypes = { ...Icon.propTypes }

export default MaterialFormatQuote