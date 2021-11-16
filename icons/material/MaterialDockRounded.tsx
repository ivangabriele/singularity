import React from 'react'

import Icon from '../Icon'

const MaterialDockRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M9 23h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1zm7-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z" />
  </svg>
)

const MaterialDockRounded = props => <Icon as={MaterialDockRoundedSvg} {...props} />

MaterialDockRounded.defaultProps = { ...Icon.defaultProps }

MaterialDockRounded.propTypes = { ...Icon.propTypes }

export default MaterialDockRounded