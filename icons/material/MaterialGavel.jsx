import React from 'react'

import Icon from '../Icon'

const MaterialGavelSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <rect
          height="20"
          transform="matrix(0.7075 -0.7067 0.7067 0.7075 -5.6854 13.7194)"
          width="4"
          x="11.73"
          y="3.73"
        />
        <rect height="8" transform="matrix(0.707 -0.7072 0.7072 0.707 0.3157 11.246)" width="4" x="11.73" y="1.24" />
        <rect height="8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.1722 7.7256)" width="4" x="3.24" y="9.73" />
        <rect height="2" width="12" x="1" y="21" />
      </g>
    </g>
  </svg>
)

const MaterialGavel = props => <Icon as={MaterialGavelSvg} {...props} />

MaterialGavel.defaultProps = { ...Icon.defaultProps }

MaterialGavel.propTypes = { ...Icon.propTypes }

export default MaterialGavel
