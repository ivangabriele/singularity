import React from 'react'

import Icon from '../Icon'

const MaterialPaymentsTwoToneSvg = props => (
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
      <path d="M17,6H3v8h14V6z M10,13c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S11.66,13,10,13z" opacity=".3" />
      <g>
        <path d="M17,4H3C1.9,4,1,4.9,1,6v8c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C19,4.9,18.1,4,17,4L17,4z M3,14V6h14v8H3z" />
        <path d="M10,7c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S11.66,7,10,7L10,7z" />
      </g>
      <path d="M23,7v11c0,1.1-0.9,2-2,2H4c0-1,0-0.9,0-2h17V7C22.1,7,22,7,23,7z" />
    </g>
  </svg>
)

const MaterialPaymentsTwoTone = props => <Icon as={MaterialPaymentsTwoToneSvg} {...props} />

MaterialPaymentsTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPaymentsTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPaymentsTwoTone
