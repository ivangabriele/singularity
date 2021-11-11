import React from 'react'

import Icon from '../Icon'

const MaterialProductionQuantityLimitsRoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,10L12,10c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0C13,9.55,12.55,10,12,10z M12,6L12,6 c-0.55,0-1-0.45-1-1V2c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3C13,5.55,12.55,6,12,6z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22 s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45 c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14c0.25-0.48,0.08-1.08-0.4-1.34v0c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.27,2H2 C1.45,2,1,2.45,1,3v0c0,0.55,0.45,1,1,1h1l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7 L8.1,13z" />
  </svg>
)

const MaterialProductionQuantityLimitsRounded = props => (
  <Icon as={MaterialProductionQuantityLimitsRoundedSvg} {...props} />
)

MaterialProductionQuantityLimitsRounded.defaultProps = { ...Icon.defaultProps }

MaterialProductionQuantityLimitsRounded.propTypes = { ...Icon.propTypes }

export default MaterialProductionQuantityLimitsRounded
