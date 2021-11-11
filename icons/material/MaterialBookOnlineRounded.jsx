import React from 'react'

import Icon from '../Icon'

const MaterialBookOnlineRoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1L17,1z M7,6h10v12H7V6z M16,11V9.14 C16,8.51,15.55,8,15,8H9C8.45,8,8,8.51,8,9.14l0,1.96c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1l0,1.76C8,15.49,8.45,16,9,16h6 c0.55,0,1-0.51,1-1.14V13c-0.55,0-1-0.45-1-1C15,11.45,15.45,11,16,11z M12,14.5L12,14.5c-0.28,0-0.5-0.22-0.5-0.5v0 c0-0.28,0.22-0.5,0.5-0.5h0c0.28,0,0.5,0.22,0.5,0.5v0C12.5,14.28,12.28,14.5,12,14.5z M12,12.5L12,12.5c-0.28,0-0.5-0.22-0.5-0.5v0 c0-0.28,0.22-0.5,0.5-0.5h0c0.28,0,0.5,0.22,0.5,0.5v0C12.5,12.28,12.28,12.5,12,12.5z M12,10.5L12,10.5c-0.28,0-0.5-0.22-0.5-0.5v0 c0-0.28,0.22-0.5,0.5-0.5h0c0.28,0,0.5,0.22,0.5,0.5v0C12.5,10.28,12.28,10.5,12,10.5z" />
  </svg>
)

const MaterialBookOnlineRounded = props => <Icon as={MaterialBookOnlineRoundedSvg} {...props} />

MaterialBookOnlineRounded.defaultProps = { ...Icon.defaultProps }

MaterialBookOnlineRounded.propTypes = { ...Icon.propTypes }

export default MaterialBookOnlineRounded
