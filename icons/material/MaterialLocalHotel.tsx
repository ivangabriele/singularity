import React from 'react'

import Icon from '../Icon'

const MaterialLocalHotelSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
  </svg>
)

const MaterialLocalHotel = props => <Icon as={MaterialLocalHotelSvg} {...props} />

MaterialLocalHotel.defaultProps = { ...Icon.defaultProps }

MaterialLocalHotel.propTypes = { ...Icon.propTypes }

export default MaterialLocalHotel