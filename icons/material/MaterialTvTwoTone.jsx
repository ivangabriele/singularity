import React from 'react'

import Icon from '../Icon'

const MaterialTvTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 5h18v12H3z" opacity=".3" />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
  </svg>
)

const MaterialTvTwoTone = props => <Icon as={MaterialTvTwoToneSvg} {...props} />

MaterialTvTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialTvTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialTvTwoTone
