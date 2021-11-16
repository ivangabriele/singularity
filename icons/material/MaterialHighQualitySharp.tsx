import React from 'react'

import Icon from '../Icon'

const MaterialHighQualitySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 4H3v16h18V4zM11 15H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7 0h-1.75v1.5h-1.5V15H13V9h5v6zm-3.5-1.5h2v-3h-2v3z" />
  </svg>
)

const MaterialHighQualitySharp = props => <Icon as={MaterialHighQualitySharpSvg} {...props} />

MaterialHighQualitySharp.defaultProps = { ...Icon.defaultProps }

MaterialHighQualitySharp.propTypes = { ...Icon.propTypes }

export default MaterialHighQualitySharp