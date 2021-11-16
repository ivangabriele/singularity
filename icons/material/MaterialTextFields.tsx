import React from 'react'

import Icon from '../Icon'

const MaterialTextFieldsSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <g>
          <path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialTextFields = props => <Icon as={MaterialTextFieldsSvg} {...props} />

MaterialTextFields.defaultProps = { ...Icon.defaultProps }

MaterialTextFields.propTypes = { ...Icon.propTypes }

export default MaterialTextFields