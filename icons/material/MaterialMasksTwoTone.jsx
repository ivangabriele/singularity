import React from 'react'

import Icon from '../Icon'

const MaterialMasksTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path
      d="M14.34,8.78C13.52,8.33,12.93,8,12,8c-0.93,0-1.52,0.33-2.34,0.77C8.95,9.16,8.12,9.62,7,9.85v1.65 c0,2.76,2.24,5,5,5s5-2.24,5-5V9.85C15.88,9.62,15.05,9.16,14.34,8.78z M15,11.25c-0.75-0.21-1.26-0.51-1.71-0.78 C12.83,10.2,12.49,10,12,10c-0.49,0-0.84,0.2-1.31,0.48c-0.44,0.26-0.96,0.56-1.69,0.76V10.2c0.48-0.17,0.84-0.38,1.18-0.58 C10.72,9.3,11.23,9,12,9s1.27,0.3,1.8,0.62c0.34,0.2,0.71,0.42,1.2,0.59V11.25z"
      opacity=".3"
    />
    <path d="M19.5,6c-1.31,0-2.37,1.01-2.48,2.3C15.14,7.8,14.18,6.5,12,6.5c-2.19,0-3.14,1.3-5.02,1.8C6.87,7.02,5.81,6,4.5,6 C3.12,6,2,7.12,2,8.5V9c0,6,3.6,7.81,6.52,7.98C9.53,17.62,10.72,18,12,18s2.47-0.38,3.48-1.02C18.4,16.81,22,15,22,9V8.5 C22,7.12,20.88,6,19.5,6z M3.5,9V8.5c0-0.55,0.45-1,1-1s1,0.45,1,1v3c0,1.28,0.38,2.47,1.01,3.48C4.99,14.27,3.5,12.65,3.5,9z M7,11.5V9.85c1.12-0.23,1.95-0.69,2.66-1.08C10.48,8.33,11.07,8,12,8c0.93,0,1.52,0.33,2.34,0.78c0.71,0.39,1.54,0.84,2.66,1.08 v1.65c0,2.76-2.24,5-5,5S7,14.26,7,11.5z M20.5,9c0,3.65-1.49,5.27-3.01,5.98c0.64-1.01,1.01-2.2,1.01-3.48v-3c0-0.55,0.45-1,1-1 s1,0.45,1,1V9z M10.69,10.48c-0.44,0.26-0.96,0.56-1.69,0.76V10.2c0.48-0.17,0.84-0.38,1.18-0.58C10.72,9.3,11.23,9,12,9 s1.27,0.3,1.8,0.62c0.34,0.2,0.71,0.42,1.2,0.59v1.04c-0.75-0.21-1.26-0.51-1.71-0.78C12.83,10.2,12.49,10,12,10 C11.51,10,11.16,10.2,10.69,10.48z" />
  </svg>
)

const MaterialMasksTwoTone = props => <Icon as={MaterialMasksTwoToneSvg} {...props} />

MaterialMasksTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialMasksTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialMasksTwoTone
