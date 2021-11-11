import React from 'react'

import Icon from '../Icon'

const MaterialOneXMobiledataSvg = props => (
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
        <path d="M4,7h4v10H6V9H4V7z M15.83,11.72L18.66,7h-2.33l-1.66,2.77L13,7h-2.33l2.83,4.72L10.33,17h2.33l2-3.34l2,3.34H19 L15.83,11.72z" />
      </g>
    </g>
  </svg>
)

const MaterialOneXMobiledata = props => <Icon as={MaterialOneXMobiledataSvg} {...props} />

MaterialOneXMobiledata.defaultProps = { ...Icon.defaultProps }

MaterialOneXMobiledata.propTypes = { ...Icon.propTypes }

export default MaterialOneXMobiledata
