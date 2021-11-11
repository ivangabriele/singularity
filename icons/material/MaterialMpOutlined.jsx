import React from 'react'

import Icon from '../Icon'

const MaterialMpOutlinedSvg = props => (
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
        <path d="M17,9h-3.5v6H15v-1.5h2c0.55,0,1-0.45,1-1V10C18,9.45,17.55,9,17,9z M16.5,12H15v-1.5h1.5V12z" />
        <path d="M11.5,9H7c-0.55,0-1,0.45-1,1v5h1.5v-4.5h1v3H10v-3h1V15h1.5v-5C12.5,9.45,12.05,9,11.5,9z" />
        <path d="M19,3H5C3.9,3,3,3.9,3,5V19c0,1.1,0.9,2,2,2H19c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M5,19L5,5h14l0,14L5,19z" />
      </g>
    </g>
  </svg>
)

const MaterialMpOutlined = props => <Icon as={MaterialMpOutlinedSvg} {...props} />

MaterialMpOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMpOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMpOutlined
