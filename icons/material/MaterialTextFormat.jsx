import React from 'react'

import Icon from '../Icon'

const MaterialTextFormatSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z" />
  </svg>
)

const MaterialTextFormat = props => <Icon as={MaterialTextFormatSvg} {...props} />

MaterialTextFormat.defaultProps = { ...Icon.defaultProps }

MaterialTextFormat.propTypes = { ...Icon.propTypes }

export default MaterialTextFormat
