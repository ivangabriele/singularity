import React from 'react'

import Icon from '../Icon'

const MaterialSchoolSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
)

const MaterialSchoolSharp = props => <Icon as={MaterialSchoolSharpSvg} {...props} />

MaterialSchoolSharp.defaultProps = { ...Icon.defaultProps }

MaterialSchoolSharp.propTypes = { ...Icon.propTypes }

export default MaterialSchoolSharp
