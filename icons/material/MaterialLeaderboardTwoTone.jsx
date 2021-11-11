import React from 'react'

import Icon from '../Icon'

const MaterialLeaderboardTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <g opacity=".3">
      <path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" />
    </g>
    <g>
      <path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" />
    </g>
  </svg>
)

const MaterialLeaderboardTwoTone = props => <Icon as={MaterialLeaderboardTwoToneSvg} {...props} />

MaterialLeaderboardTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialLeaderboardTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialLeaderboardTwoTone
