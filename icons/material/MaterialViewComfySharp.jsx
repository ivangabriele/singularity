import React from 'react'

import Icon from '../Icon'

const MaterialViewComfySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z" />
  </svg>
)

const MaterialViewComfySharp = props => <Icon as={MaterialViewComfySharpSvg} {...props} />

MaterialViewComfySharp.defaultProps = { ...Icon.defaultProps }

MaterialViewComfySharp.propTypes = { ...Icon.propTypes }

export default MaterialViewComfySharp
