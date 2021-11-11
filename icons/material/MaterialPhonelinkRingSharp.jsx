import React from 'react'

import Icon from '../Icon'

const MaterialPhonelinkRingSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM16 1H2v22h14V1zm-2 19H4V4h10v16z" />
  </svg>
)

const MaterialPhonelinkRingSharp = props => <Icon as={MaterialPhonelinkRingSharpSvg} {...props} />

MaterialPhonelinkRingSharp.defaultProps = { ...Icon.defaultProps }

MaterialPhonelinkRingSharp.propTypes = { ...Icon.propTypes }

export default MaterialPhonelinkRingSharp
