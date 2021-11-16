import React from 'react'

import Icon from '../Icon'

const MaterialSaveSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 3H3v18h18V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
  </svg>
)

const MaterialSaveSharp = props => <Icon as={MaterialSaveSharpSvg} {...props} />

MaterialSaveSharp.defaultProps = { ...Icon.defaultProps }

MaterialSaveSharp.propTypes = { ...Icon.propTypes }

export default MaterialSaveSharp