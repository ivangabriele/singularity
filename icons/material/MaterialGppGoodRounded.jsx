import React from 'react'

import Icon from '../Icon'

const MaterialGppGoodRoundedSvg = props => (
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
      <path d="M11.3,2.26l-6,2.25C4.52,4.81,4,5.55,4,6.39v4.71c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V6.39 c0-0.83-0.52-1.58-1.3-1.87l-6-2.25C12.25,2.09,11.75,2.09,11.3,2.26z M10.23,14.83l-2.12-2.12c-0.39-0.39-0.39-1.02,0-1.41l0,0 c0.39-0.39,1.02-0.39,1.41,0l1.41,1.41l3.54-3.54c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41l-4.24,4.24 C11.26,15.22,10.62,15.22,10.23,14.83z" />
    </g>
  </svg>
)

const MaterialGppGoodRounded = props => <Icon as={MaterialGppGoodRoundedSvg} {...props} />

MaterialGppGoodRounded.defaultProps = { ...Icon.defaultProps }

MaterialGppGoodRounded.propTypes = { ...Icon.propTypes }

export default MaterialGppGoodRounded
