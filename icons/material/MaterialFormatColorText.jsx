import React from 'react'

import Icon from '../Icon'

const MaterialFormatColorTextSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M2,20h20v4H2V20z M5.49,17h2.42l1.27-3.58h5.65L16.09,17h2.42L13.25,3h-2.5L5.49,17z M9.91,11.39l2.03-5.79h0.12l2.03,5.79 H9.91z" />
  </svg>
)

const MaterialFormatColorText = props => <Icon as={MaterialFormatColorTextSvg} {...props} />

MaterialFormatColorText.defaultProps = { ...Icon.defaultProps }

MaterialFormatColorText.propTypes = { ...Icon.propTypes }

export default MaterialFormatColorText
