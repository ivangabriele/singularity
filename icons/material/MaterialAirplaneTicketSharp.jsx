import React from 'react'

import Icon from '../Icon'

const MaterialAirplaneTicketSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M22,4H2.01v6C3.11,10,4,10.9,4,12s-0.89,2-2,2v6h20V4z M17.73,13.3l-8.86,2.36l-1.66-2.88l0.93-0.25l1.26,0.99l2.39-0.64 l-2.4-4.16l1.4-0.38l4.01,3.74l2.44-0.65c0.51-0.14,1.04,0.17,1.18,0.68C18.55,12.62,18.25,13.15,17.73,13.3z" />
    </g>
  </svg>
)

const MaterialAirplaneTicketSharp = props => <Icon as={MaterialAirplaneTicketSharpSvg} {...props} />

MaterialAirplaneTicketSharp.defaultProps = { ...Icon.defaultProps }

MaterialAirplaneTicketSharp.propTypes = { ...Icon.propTypes }

export default MaterialAirplaneTicketSharp
