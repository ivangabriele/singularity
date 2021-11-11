import React from 'react'

import Icon from '../Icon'

const MaterialSwapVertSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" />
  </svg>
)

const MaterialSwapVert = props => <Icon as={MaterialSwapVertSvg} {...props} />

MaterialSwapVert.defaultProps = { ...Icon.defaultProps }

MaterialSwapVert.propTypes = { ...Icon.propTypes }

export default MaterialSwapVert
