import React from 'react'

import Icon from '../Icon'

const MaterialPriceChangeSvg = props => (
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
      <path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M12,10H8v1h3 c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1v1H8v-1H6v-2h4v-1H7c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h1V7h2v1h2V10z M16,16.25 l-2-2h4L16,16.25z M14,10l2-2l2,2H14z" />
    </g>
  </svg>
)

const MaterialPriceChange = props => <Icon as={MaterialPriceChangeSvg} {...props} />

MaterialPriceChange.defaultProps = { ...Icon.defaultProps }

MaterialPriceChange.propTypes = { ...Icon.propTypes }

export default MaterialPriceChange
