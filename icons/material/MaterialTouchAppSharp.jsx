import React from 'react'

import Icon from '../Icon'

const MaterialTouchAppSharpSvg = props => (
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
      <g>
        <path d="M8.25,9.24V5.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v3.74c1.21-0.81,2-2.18,2-3.74c0-2.49-2.01-4.5-4.5-4.5 s-4.5,2.01-4.5,4.5C6.25,7.06,7.04,8.43,8.25,9.24z M13.33,11.5h-1.08v-6c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5v10.74 l-4.04-0.85L4,16.62L9.38,22h8.67l1.07-7.62L13.33,11.5z" />
      </g>
    </g>
  </svg>
)

const MaterialTouchAppSharp = props => <Icon as={MaterialTouchAppSharpSvg} {...props} />

MaterialTouchAppSharp.defaultProps = { ...Icon.defaultProps }

MaterialTouchAppSharp.propTypes = { ...Icon.propTypes }

export default MaterialTouchAppSharp
