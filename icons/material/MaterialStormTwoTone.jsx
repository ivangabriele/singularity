import React from 'react'

import Icon from '../Icon'

const MaterialStormTwoToneSvg = props => (
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
        <circle cx="12" cy="12" opacity=".3" r="2" />
        <path
          d="M17.2,9C15.54,6.13,11.86,5.15,9,6.8c-2.67,1.54-3.7,4.84-2.5,7.6c0.09,0.2,0.19,0.4,0.3,0.6 c1.66,2.87,5.33,3.85,8.2,2.2c2.67-1.54,3.7-4.84,2.5-7.6C17.41,9.4,17.31,9.2,17.2,9z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4 s4,1.79,4,4S14.21,16,12,16z"
          opacity=".3"
        />
        <path d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,14,12,14z" />
        <path d="M18.93,8C16.72,4.18,11.82,2.87,8,5.07c-1.41,0.82-2.48,2-3.16,3.37C4.71,6.24,5.06,4.04,5.86,2H3.74 C2.2,6.49,2.52,11.58,5.07,16c1.1,1.91,2.88,3.19,4.86,3.72c1.98,0.53,4.16,0.31,6.07-0.79c1.41-0.82,2.48-2,3.16-3.37 c0.13,2.2-0.21,4.4-1.01,6.44h2.11C21.79,17.51,21.48,12.42,18.93,8z M15,17.2c-2.87,1.65-6.54,0.67-8.2-2.2 c-0.11-0.2-0.21-0.4-0.3-0.6C5.3,11.64,6.33,8.34,9,6.8c2.86-1.65,6.54-0.67,8.2,2.2c0.11,0.2,0.21,0.4,0.3,0.6 C18.7,12.36,17.67,15.66,15,17.2z" />
      </g>
    </g>
  </svg>
)

const MaterialStormTwoTone = props => <Icon as={MaterialStormTwoToneSvg} {...props} />

MaterialStormTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialStormTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialStormTwoTone
