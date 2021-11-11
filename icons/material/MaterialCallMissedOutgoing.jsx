import React from 'react'

import Icon from '../Icon'

const MaterialCallMissedOutgoingSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <g>
          <path d="M3,8.41l9,9l7-7V15h2V7h-8v2h4.59L12,14.59L4.41,7L3,8.41z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialCallMissedOutgoing = props => <Icon as={MaterialCallMissedOutgoingSvg} {...props} />

MaterialCallMissedOutgoing.defaultProps = { ...Icon.defaultProps }

MaterialCallMissedOutgoing.propTypes = { ...Icon.propTypes }

export default MaterialCallMissedOutgoing
