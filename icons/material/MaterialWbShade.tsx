import React from 'react'

import Icon from '../Icon'

const MaterialWbShadeSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 12v2.5l5.5 5.5H22zm0 8h3l-3-3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z" />
  </svg>
)

const MaterialWbShade = props => <Icon as={MaterialWbShadeSvg} {...props} />

MaterialWbShade.defaultProps = { ...Icon.defaultProps }

MaterialWbShade.propTypes = { ...Icon.propTypes }

export default MaterialWbShade