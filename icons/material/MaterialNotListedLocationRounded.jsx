import React from 'react'

import Icon from '../Icon'

const MaterialNotListedLocationRoundedSvg = props => (
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
      <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.22c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M12.01,16c-0.59,0-1.05-0.47-1.05-1.05c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04 C13.05,15.53,12.61,16,12.01,16z M14.52,9.83c-0.63,0.93-1.23,1.21-1.56,1.81c-0.08,0.14-0.13,0.26-0.16,0.49 c-0.05,0.39-0.36,0.68-0.75,0.68h-0.03c-0.44,0-0.79-0.38-0.75-0.82c0.03-0.27,0.09-0.57,0.25-0.84c0.41-0.73,1.18-1.16,1.63-1.8 c0.48-0.68,0.21-1.94-1.14-1.94c-0.61,0-1.01,0.32-1.26,0.7c-0.19,0.29-0.57,0.39-0.89,0.25c-0.42-0.18-0.6-0.7-0.34-1.07 C10.03,6.55,10.88,6,12,6c1.23,0,2.08,0.56,2.51,1.26C14.87,7.87,15.09,8.99,14.52,9.83z" />
    </g>
  </svg>
)

const MaterialNotListedLocationRounded = props => <Icon as={MaterialNotListedLocationRoundedSvg} {...props} />

MaterialNotListedLocationRounded.defaultProps = { ...Icon.defaultProps }

MaterialNotListedLocationRounded.propTypes = { ...Icon.propTypes }

export default MaterialNotListedLocationRounded
