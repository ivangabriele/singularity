import React from 'react'

import Icon from '../Icon'

const MaterialHeadphonesSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M12,3c-4.97,0-9,4.03-9,9v9h6v-8H5v-1c0-3.87,3.13-7,7-7s7,3.13,7,7v1h-4v8h6v-9C21,7.03,16.97,3,12,3z" />
    </g>
  </svg>
)

const MaterialHeadphonesSharp = props => <Icon as={MaterialHeadphonesSharpSvg} {...props} />

MaterialHeadphonesSharp.defaultProps = { ...Icon.defaultProps }

MaterialHeadphonesSharp.propTypes = { ...Icon.propTypes }

export default MaterialHeadphonesSharp
