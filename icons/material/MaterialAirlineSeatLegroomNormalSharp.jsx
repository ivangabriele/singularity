import React from 'react'

import Icon from '../Icon'

const MaterialAirlineSeatLegroomNormalSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 15V3H3v14h11v-2H5zm17 3h-3v-7c0-1.1-.9-2-2-2h-5V3H6v11h10v7h6v-3z" />
  </svg>
)

const MaterialAirlineSeatLegroomNormalSharp = props => <Icon as={MaterialAirlineSeatLegroomNormalSharpSvg} {...props} />

MaterialAirlineSeatLegroomNormalSharp.defaultProps = { ...Icon.defaultProps }

MaterialAirlineSeatLegroomNormalSharp.propTypes = { ...Icon.propTypes }

export default MaterialAirlineSeatLegroomNormalSharp
