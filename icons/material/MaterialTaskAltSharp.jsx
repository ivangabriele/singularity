import React from 'react'

import Icon from '../Icon'

const MaterialTaskAltSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" />
  </svg>
)

const MaterialTaskAltSharp = props => <Icon as={MaterialTaskAltSharpSvg} {...props} />

MaterialTaskAltSharp.defaultProps = { ...Icon.defaultProps }

MaterialTaskAltSharp.propTypes = { ...Icon.propTypes }

export default MaterialTaskAltSharp
