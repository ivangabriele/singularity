import React from 'react'

import Icon from '../Icon'

const MaterialPaddingTwoToneSvg = props => (
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
        <path d="M5,19h14V5H5V19z M15,7h2v2h-2V7z M11,7h2v2h-2V7z M7,7h2v2H7V7z" enable-background="new" opacity=".3" />
        <path d="M3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5z M19,19H5V5h14V19z" />
        <rect height="2" width="2" x="15" y="7" />
        <rect height="2" width="2" x="7" y="7" />
        <rect height="2" width="2" x="11" y="7" />
      </g>
    </g>
  </svg>
)

const MaterialPaddingTwoTone = props => <Icon as={MaterialPaddingTwoToneSvg} {...props} />

MaterialPaddingTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPaddingTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPaddingTwoTone
