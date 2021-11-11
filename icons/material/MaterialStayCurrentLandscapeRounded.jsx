import React from 'react'

import Icon from '../Icon'

const MaterialStayCurrentLandscapeRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z" />
  </svg>
)

const MaterialStayCurrentLandscapeRounded = props => <Icon as={MaterialStayCurrentLandscapeRoundedSvg} {...props} />

MaterialStayCurrentLandscapeRounded.defaultProps = { ...Icon.defaultProps }

MaterialStayCurrentLandscapeRounded.propTypes = { ...Icon.propTypes }

export default MaterialStayCurrentLandscapeRounded
