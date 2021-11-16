import React from 'react'

import Icon from '../Icon'

const MaterialStarPurplefive00SharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
)

const MaterialStarPurplefive00Sharp = props => <Icon as={MaterialStarPurplefive00SharpSvg} {...props} />

MaterialStarPurplefive00Sharp.defaultProps = { ...Icon.defaultProps }

MaterialStarPurplefive00Sharp.propTypes = { ...Icon.propTypes }

export default MaterialStarPurplefive00Sharp