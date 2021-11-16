import React from 'react'

import Icon from '../Icon'

const MaterialTextRotationAngleupTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M16.76 9l1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19L21 13.24V9h-4.24zm-8.28 3.75l3.54-3.54 2.19.92 1.48-1.48L4.56 4.23 3.5 5.29l4.42 11.14 1.48-1.48-.92-2.2zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z" />
  </svg>
)

const MaterialTextRotationAngleupTwoTone = props => <Icon as={MaterialTextRotationAngleupTwoToneSvg} {...props} />

MaterialTextRotationAngleupTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialTextRotationAngleupTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialTextRotationAngleupTwoTone