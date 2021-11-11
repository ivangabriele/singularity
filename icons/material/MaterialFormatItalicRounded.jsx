import React from 'react'

import Icon from '../Icon'

const MaterialFormatItalicRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z" />
  </svg>
)

const MaterialFormatItalicRounded = props => <Icon as={MaterialFormatItalicRoundedSvg} {...props} />

MaterialFormatItalicRounded.defaultProps = { ...Icon.defaultProps }

MaterialFormatItalicRounded.propTypes = { ...Icon.propTypes }

export default MaterialFormatItalicRounded
