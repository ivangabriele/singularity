import React from 'react'

import Icon from '../Icon'

const MaterialTourSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
  </svg>
)

const MaterialTour = props => <Icon as={MaterialTourSvg} {...props} />

MaterialTour.defaultProps = { ...Icon.defaultProps }

MaterialTour.propTypes = { ...Icon.propTypes }

export default MaterialTour
