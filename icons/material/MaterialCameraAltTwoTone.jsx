import React from 'react'

import Icon from '../Icon'

const MaterialCameraAltTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M14.12 4H9.88L8.05 6H4v12h16V6h-4.05l-1.83-2zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      opacity=".3"
    />
    <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
  </svg>
)

const MaterialCameraAltTwoTone = props => <Icon as={MaterialCameraAltTwoToneSvg} {...props} />

MaterialCameraAltTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialCameraAltTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialCameraAltTwoTone
