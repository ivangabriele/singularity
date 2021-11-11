import React from 'react'

import Icon from '../Icon'

const MaterialSplitscreenSharpSvg = props => (
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
      <g>
        <path d="M18,4v5H6V4H18 M20,2H4v9h16V2z M18,15v5H6v-5H18 M20,13H4v9h16V13z" />
      </g>
    </g>
  </svg>
)

const MaterialSplitscreenSharp = props => <Icon as={MaterialSplitscreenSharpSvg} {...props} />

MaterialSplitscreenSharp.defaultProps = { ...Icon.defaultProps }

MaterialSplitscreenSharp.propTypes = { ...Icon.propTypes }

export default MaterialSplitscreenSharp
