import React from 'react'

import Icon from '../Icon'

const MaterialTrendingUpSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
  </svg>
)

const MaterialTrendingUpSharp = props => <Icon as={MaterialTrendingUpSharpSvg} {...props} />

MaterialTrendingUpSharp.defaultProps = { ...Icon.defaultProps }

MaterialTrendingUpSharp.propTypes = { ...Icon.propTypes }

export default MaterialTrendingUpSharp