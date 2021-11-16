import React from 'react'

import Icon from '../Icon'

const MaterialCableSharpSvg = props => (
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
        <path d="M20,5V3h-4v2h-1v5h2v9h-4V3H5v11H3v5h1v2h4v-2h1v-5H7V5h4v16h8V10h2V5H20z" />
      </g>
    </g>
  </svg>
)

const MaterialCableSharp = props => <Icon as={MaterialCableSharpSvg} {...props} />

MaterialCableSharp.defaultProps = { ...Icon.defaultProps }

MaterialCableSharp.propTypes = { ...Icon.propTypes }

export default MaterialCableSharp