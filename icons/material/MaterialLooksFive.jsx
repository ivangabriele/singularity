import React from 'react'

import Icon from '../Icon'

const MaterialLooksFiveSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z" />
  </svg>
)

const MaterialLooksFive = props => <Icon as={MaterialLooksFiveSvg} {...props} />

MaterialLooksFive.defaultProps = { ...Icon.defaultProps }

MaterialLooksFive.propTypes = { ...Icon.propTypes }

export default MaterialLooksFive
