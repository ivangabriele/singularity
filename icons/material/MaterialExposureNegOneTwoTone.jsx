import React from 'react'

import Icon from '../Icon'

const MaterialExposureNegOneTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z" />
  </svg>
)

const MaterialExposureNegOneTwoTone = props => <Icon as={MaterialExposureNegOneTwoToneSvg} {...props} />

MaterialExposureNegOneTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialExposureNegOneTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialExposureNegOneTwoTone
