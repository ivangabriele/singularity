import React from 'react'

import Icon from '../Icon'

const MaterialVillaRoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M7,21H4c-0.55,0-1-0.45-1-1V8.69C3,8.27,3.25,7.9,3.64,7.75l11-4.23C15.3,3.27,16,3.75,16,4.46V10H8c-0.55,0-1,0.45-1,1V21z M17,12h-7c-0.55,0-1,0.45-1,1v7c0,0.55,0.45,1,1,1h4v-4c0-0.55,0.45-1,1-1s1,0.45,1,1v4h4c0.55,0,1-0.45,1-1v-8c0-1.1-0.9-2-2-2 S17,10.9,17,12z" />
  </svg>
)

const MaterialVillaRounded = props => <Icon as={MaterialVillaRoundedSvg} {...props} />

MaterialVillaRounded.defaultProps = { ...Icon.defaultProps }

MaterialVillaRounded.propTypes = { ...Icon.propTypes }

export default MaterialVillaRounded
