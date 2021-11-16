import React from 'react'

import Icon from '../Icon'

const MaterialPlayDisabledSharpSvg = props => (
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
        <polygon points="16.45,13.62 19,12 8,5 8,5.17" />
        <polygon points="2.81,2.81 1.39,4.22 8,10.83 8,19 12.99,15.82 19.78,22.61 21.19,21.19" />
      </g>
    </g>
  </svg>
)

const MaterialPlayDisabledSharp = props => <Icon as={MaterialPlayDisabledSharpSvg} {...props} />

MaterialPlayDisabledSharp.defaultProps = { ...Icon.defaultProps }

MaterialPlayDisabledSharp.propTypes = { ...Icon.propTypes }

export default MaterialPlayDisabledSharp