import React from 'react'

import Icon from '../Icon'

const MaterialFormatTextdirectionRToLSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z" />
  </svg>
)

const MaterialFormatTextdirectionRToL = props => <Icon as={MaterialFormatTextdirectionRToLSvg} {...props} />

MaterialFormatTextdirectionRToL.defaultProps = { ...Icon.defaultProps }

MaterialFormatTextdirectionRToL.propTypes = { ...Icon.propTypes }

export default MaterialFormatTextdirectionRToL
