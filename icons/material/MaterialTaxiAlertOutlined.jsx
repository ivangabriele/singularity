import React from 'react'

import Icon from '../Icon'

const MaterialTaxiAlertOutlinedSvg = props => (
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
        <g>
          <circle cx="6.5" cy="15.5" r="1.5" />
        </g>
        <g>
          <circle cx="15.5" cy="15.5" r="1.5" />
        </g>
        <g>
          <path d="M18,13v5H4v-5H18c-1.91,0-3.63-0.76-4.89-2H4.81l1.04-3h5.44C11.1,7.37,11,6.7,11,6s0.1-1.37,0.29-2H8v2H5.5 C4.84,6,4.29,6.42,4.08,7.01L2,13v8c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-8 l-0.09-0.27C19.3,12.9,18.66,13,18,13z" />
        </g>
        <g>
          <path d="M18,1c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,1,18,1z M18.5,9h-1V8h1V9z M18.5,7h-1V3h1V7z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialTaxiAlertOutlined = props => <Icon as={MaterialTaxiAlertOutlinedSvg} {...props} />

MaterialTaxiAlertOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTaxiAlertOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTaxiAlertOutlined
