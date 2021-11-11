import React from 'react'

import Icon from '../Icon'

const MaterialBrightnessThreeSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" />
  </svg>
)

const MaterialBrightnessThree = props => <Icon as={MaterialBrightnessThreeSvg} {...props} />

MaterialBrightnessThree.defaultProps = { ...Icon.defaultProps }

MaterialBrightnessThree.propTypes = { ...Icon.propTypes }

export default MaterialBrightnessThree
