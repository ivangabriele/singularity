import React from 'react'

import Icon from '../Icon'

const MaterialLocalPharmacySvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z" />
  </svg>
)

const MaterialLocalPharmacy = props => <Icon as={MaterialLocalPharmacySvg} {...props} />

MaterialLocalPharmacy.defaultProps = { ...Icon.defaultProps }

MaterialLocalPharmacy.propTypes = { ...Icon.propTypes }

export default MaterialLocalPharmacy
