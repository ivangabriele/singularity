import React from 'react'

import Icon from '../Icon'

const MaterialHotelTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 9h-6v6h8v-4c0-1.1-.9-2-2-2z" opacity=".3" />
    <circle cx="7" cy="11" opacity=".3" r="1" />
    <path d="M4 11c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm11-4h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" />
  </svg>
)

const MaterialHotelTwoTone = props => <Icon as={MaterialHotelTwoToneSvg} {...props} />

MaterialHotelTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialHotelTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialHotelTwoTone
