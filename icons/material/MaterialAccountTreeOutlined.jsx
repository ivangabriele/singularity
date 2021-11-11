import React from 'react'

import Icon from '../Icon'

const MaterialAccountTreeOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z" />
  </svg>
)

const MaterialAccountTreeOutlined = props => <Icon as={MaterialAccountTreeOutlinedSvg} {...props} />

MaterialAccountTreeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialAccountTreeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialAccountTreeOutlined
