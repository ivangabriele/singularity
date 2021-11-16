import React from 'react'

import Icon from '../Icon'

const MaterialSubdirectoryArrowRightSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
  </svg>
)

const MaterialSubdirectoryArrowRight = props => <Icon as={MaterialSubdirectoryArrowRightSvg} {...props} />

MaterialSubdirectoryArrowRight.defaultProps = { ...Icon.defaultProps }

MaterialSubdirectoryArrowRight.propTypes = { ...Icon.propTypes }

export default MaterialSubdirectoryArrowRight