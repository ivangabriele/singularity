import React from 'react'

import Icon from '../Icon'

const MaterialDangerousSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M16.24,14.83l-1.41,1.41L12,13.41l-2.83,2.83l-1.41-1.41 L10.59,12L7.76,9.17l1.41-1.41L12,10.59l2.83-2.83l1.41,1.41L13.41,12L16.24,14.83z" />
    </g>
  </svg>
)

const MaterialDangerousSharp = props => <Icon as={MaterialDangerousSharpSvg} {...props} />

MaterialDangerousSharp.defaultProps = { ...Icon.defaultProps }

MaterialDangerousSharp.propTypes = { ...Icon.propTypes }

export default MaterialDangerousSharp
