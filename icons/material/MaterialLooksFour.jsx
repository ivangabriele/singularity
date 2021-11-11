import React from 'react'

import Icon from '../Icon'

const MaterialLooksFourSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z" />
  </svg>
)

const MaterialLooksFour = props => <Icon as={MaterialLooksFourSvg} {...props} />

MaterialLooksFour.defaultProps = { ...Icon.defaultProps }

MaterialLooksFour.propTypes = { ...Icon.propTypes }

export default MaterialLooksFour
