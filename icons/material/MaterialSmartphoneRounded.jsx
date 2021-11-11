import React from 'react'

import Icon from '../Icon'

const MaterialSmartphoneRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
  </svg>
)

const MaterialSmartphoneRounded = props => <Icon as={MaterialSmartphoneRoundedSvg} {...props} />

MaterialSmartphoneRounded.defaultProps = { ...Icon.defaultProps }

MaterialSmartphoneRounded.propTypes = { ...Icon.propTypes }

export default MaterialSmartphoneRounded
