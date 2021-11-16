import React from 'react'

import Icon from '../Icon'

const MaterialAirlineSeatLegroomReducedSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19.97 21H14v-3l1-4H6V3h6v6h5c1.1 0 2 .9 2 2l-2 7h2.97v3zM5 15V3H3v14h9v-2H5z" />
  </svg>
)

const MaterialAirlineSeatLegroomReducedSharp = props => (
  <Icon as={MaterialAirlineSeatLegroomReducedSharpSvg} {...props} />
)

MaterialAirlineSeatLegroomReducedSharp.defaultProps = { ...Icon.defaultProps }

MaterialAirlineSeatLegroomReducedSharp.propTypes = { ...Icon.propTypes }

export default MaterialAirlineSeatLegroomReducedSharp