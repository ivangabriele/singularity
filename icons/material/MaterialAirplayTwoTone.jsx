import React from 'react'

import Icon from '../Icon'

const MaterialAirplayTwoToneSvg = props => (
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
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <g>
        <polygon points="6,22 18,22 12,16" />
        <path d="M21,3H3C1.9,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h4v-2H3V5h18v12h-4v2h4c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z" />
      </g>
    </g>
  </svg>
)

const MaterialAirplayTwoTone = props => <Icon as={MaterialAirplayTwoToneSvg} {...props} />

MaterialAirplayTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialAirplayTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialAirplayTwoTone
