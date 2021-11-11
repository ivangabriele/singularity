import React from 'react'

import Icon from '../Icon'

const MaterialMuseumOutlinedSvg = props => (
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
        <path d="M22,11V9L12,2L2,9v2h2v9H2v2h20v-2h-2v-9H22z M18,20H6V9h12V20z" />
        <polygon points="10,14 12,17 14,14 14,18 16,18 16,11 14,11 12,14 10,11 8,11 8,18 10,18" />
      </g>
    </g>
  </svg>
)

const MaterialMuseumOutlined = props => <Icon as={MaterialMuseumOutlinedSvg} {...props} />

MaterialMuseumOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMuseumOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMuseumOutlined
