import React from 'react'

import Icon from '../Icon'

const MaterialOutboundSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" x="0" y="0" />
    <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13.88,11.54l-4.96,4.96l-1.41-1.41 l4.96-4.96L10.34,8l5.65,0.01L16,13.66L13.88,11.54z" />
    <g />
    <g />
    <g />
  </svg>
)

const MaterialOutboundSharp = props => <Icon as={MaterialOutboundSharpSvg} {...props} />

MaterialOutboundSharp.defaultProps = { ...Icon.defaultProps }

MaterialOutboundSharp.propTypes = { ...Icon.propTypes }

export default MaterialOutboundSharp