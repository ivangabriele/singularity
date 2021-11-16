import React from 'react'

import Icon from '../Icon'

const MaterialViewModuleSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <g>
      <path d="M14.67,5v6.5H9.33V5H14.67z M15.67,11.5H21V5h-5.33V11.5z M14.67,19v-6.5H9.33V19H14.67z M15.67,12.5V19H21v-6.5H15.67z M8.33,12.5H3V19h5.33V12.5z M8.33,11.5V5H3v6.5H8.33z" />
    </g>
  </svg>
)

const MaterialViewModule = props => <Icon as={MaterialViewModuleSvg} {...props} />

MaterialViewModule.defaultProps = { ...Icon.defaultProps }

MaterialViewModule.propTypes = { ...Icon.propTypes }

export default MaterialViewModule