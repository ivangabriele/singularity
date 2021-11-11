import React from 'react'

import Icon from '../Icon'

const MaterialExplicitSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z" />
  </svg>
)

const MaterialExplicit = props => <Icon as={MaterialExplicitSvg} {...props} />

MaterialExplicit.defaultProps = { ...Icon.defaultProps }

MaterialExplicit.propTypes = { ...Icon.propTypes }

export default MaterialExplicit
