import React from 'react'

import Icon from '../Icon'

const MaterialBackpackTwoToneSvg = props => (
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
      <path d="M18,20H6V8c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2V20z M7.5,12v2h7v2h2v-4H7.5z" opacity=".3" />
      <path d="M17,4.14V2h-3v2h-4V2H7v2.14C5.28,4.59,4,6.14,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.14,18.72,4.59,17,4.14z M18,20H6V8c0-1.1,0.9-2,2-2h8c1.1,0,2,0.9,2,2V20z M7.5,12v2h7v2h2v-4H7.5z" />
    </g>
  </svg>
)

const MaterialBackpackTwoTone = props => <Icon as={MaterialBackpackTwoToneSvg} {...props} />

MaterialBackpackTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialBackpackTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialBackpackTwoTone
