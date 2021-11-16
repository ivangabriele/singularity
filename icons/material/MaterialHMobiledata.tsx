import React from 'react'

import Icon from '../Icon'

const MaterialHMobiledataSvg = props => (
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
        <path d="M15,11H9V7H7v10h2v-4h6v4h2V7h-2V11z" />
      </g>
    </g>
  </svg>
)

const MaterialHMobiledata = props => <Icon as={MaterialHMobiledataSvg} {...props} />

MaterialHMobiledata.defaultProps = { ...Icon.defaultProps }

MaterialHMobiledata.propTypes = { ...Icon.propTypes }

export default MaterialHMobiledata