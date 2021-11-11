import React from 'react'

import Icon from '../Icon'

const MaterialPlayCircleFilledSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
  </svg>
)

const MaterialPlayCircleFilledSharp = props => <Icon as={MaterialPlayCircleFilledSharpSvg} {...props} />

MaterialPlayCircleFilledSharp.defaultProps = { ...Icon.defaultProps }

MaterialPlayCircleFilledSharp.propTypes = { ...Icon.propTypes }

export default MaterialPlayCircleFilledSharp
