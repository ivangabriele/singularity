import React from 'react'

import Icon from '../Icon'

const MaterialSdOutlinedSvg = props => (
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
        <path d="M7,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1H7.5v-1h2V11H11v-1c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v1.5 c0,0.55,0.45,1,1,1h2.5v1h-2V13H6v1C6,14.55,6.45,15,7,15z" />
        <path d="M18,14v-4c0-0.55-0.45-1-1-1h-4v6h4C17.55,15,18,14.55,18,14z M16.5,13.5h-2v-3h2V13.5z" />
        <path d="M20,4H4C2.89,4,2,4.9,2,6v12c0,1.1,0.89,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z" />
      </g>
    </g>
  </svg>
)

const MaterialSdOutlined = props => <Icon as={MaterialSdOutlinedSvg} {...props} />

MaterialSdOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSdOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSdOutlined