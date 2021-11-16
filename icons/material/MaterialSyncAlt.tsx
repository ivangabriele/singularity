import React from 'react'

import Icon from '../Icon'

const MaterialSyncAltSvg = props => (
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
      <g />
      <g>
        <path d="M22,8l-4-4v3H3v2h15v3L22,8z" />
        <path d="M2,16l4,4v-3h15v-2H6v-3L2,16z" />
      </g>
    </g>
  </svg>
)

const MaterialSyncAlt = props => <Icon as={MaterialSyncAltSvg} {...props} />

MaterialSyncAlt.defaultProps = { ...Icon.defaultProps }

MaterialSyncAlt.propTypes = { ...Icon.propTypes }

export default MaterialSyncAlt