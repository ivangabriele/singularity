import React from 'react'

import Icon from '../Icon'

const MaterialIcecreamSvg = props => (
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
      <path
        d="M8.79,12.4l3.26,6.22l3.17-6.21c-0.11-0.08-0.21-0.16-0.3-0.25 C14.08,12.69,13.07,13,12,13s-2.08-0.31-2.92-0.84C8.99,12.25,8.89,12.33,8.79,12.4z M6.83,12.99C5.25,12.9,4,11.6,4,10 c0-1.49,1.09-2.73,2.52-2.96C6.75,4.22,9.12,2,12,2s5.25,2.22,5.48,5.04C18.91,7.27,20,8.51,20,10c0,1.59-1.24,2.9-2.81,2.99 L12.07,23L6.83,12.99z"
        fill-rule="evenodd"
      />
    </g>
  </svg>
)

const MaterialIcecream = props => <Icon as={MaterialIcecreamSvg} {...props} />

MaterialIcecream.defaultProps = { ...Icon.defaultProps }

MaterialIcecream.propTypes = { ...Icon.propTypes }

export default MaterialIcecream