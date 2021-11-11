import React from 'react'

import Icon from '../Icon'

const MaterialNoCellSharpSvg = props => (
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
      <path d="M21.19,21.19L2.81,2.81L1.39,4.22L5,7.83V23h14v-1.17l0.78,0.78L21.19,21.19z M7,18V9.83L15.17,18H7z M8.83,6L5,2.17V1h14 v15.17l-2-2V6H8.83z" />
    </g>
  </svg>
)

const MaterialNoCellSharp = props => <Icon as={MaterialNoCellSharpSvg} {...props} />

MaterialNoCellSharp.defaultProps = { ...Icon.defaultProps }

MaterialNoCellSharp.propTypes = { ...Icon.propTypes }

export default MaterialNoCellSharp
