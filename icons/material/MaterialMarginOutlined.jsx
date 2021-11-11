import React from 'react'

import Icon from '../Icon'

const MaterialMarginOutlinedSvg = props => (
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
        <path d="M3,3v18h18V3H3z M19,19H5V5h14V19z M11,7h2v2h-2V7z M7,7h2v2H7V7z M15,7h2v2h-2V7z M7,11h2v2H7V11z M11,11h2v2h-2V11z M15,11h2v2h-2V11z" />
      </g>
    </g>
  </svg>
)

const MaterialMarginOutlined = props => <Icon as={MaterialMarginOutlinedSvg} {...props} />

MaterialMarginOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMarginOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMarginOutlined
