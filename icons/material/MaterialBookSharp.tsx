import React from 'react'

import Icon from '../Icon'

const MaterialBookSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z" />
  </svg>
)

const MaterialBookSharp = props => <Icon as={MaterialBookSharpSvg} {...props} />

MaterialBookSharp.defaultProps = { ...Icon.defaultProps }

MaterialBookSharp.propTypes = { ...Icon.propTypes }

export default MaterialBookSharp