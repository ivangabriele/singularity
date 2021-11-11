import React from 'react'

import Icon from '../Icon'

const MaterialThreeGMobiledataSharpSvg = props => (
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
        <path d="M3,7v2h5v2H4v2h4v2H3v2h7V7H3z M21,11v6h-9V7h9v2h-7v6h5v-2h-2.5v-2H21z" />
      </g>
    </g>
  </svg>
)

const MaterialThreeGMobiledataSharp = props => <Icon as={MaterialThreeGMobiledataSharpSvg} {...props} />

MaterialThreeGMobiledataSharp.defaultProps = { ...Icon.defaultProps }

MaterialThreeGMobiledataSharp.propTypes = { ...Icon.propTypes }

export default MaterialThreeGMobiledataSharp
