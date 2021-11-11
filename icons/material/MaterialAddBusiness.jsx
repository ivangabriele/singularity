import React from 'react'

import Icon from '../Icon'

const MaterialAddBusinessSvg = props => (
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
        <path d="M15,17h2v-3h1v-2l-1-5H2l-1,5v2h1v6h9v-6h4V17z M9,18H4v-4h5V18z" />
        <rect height="2" width="15" x="2" y="4" />
        <polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18" />
      </g>
    </g>
  </svg>
)

const MaterialAddBusiness = props => <Icon as={MaterialAddBusinessSvg} {...props} />

MaterialAddBusiness.defaultProps = { ...Icon.defaultProps }

MaterialAddBusiness.propTypes = { ...Icon.propTypes }

export default MaterialAddBusiness
