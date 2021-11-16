import React from 'react'

import Icon from '../Icon'

const MaterialArticleSharpSvg = props => (
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
      <path d="M3,3v18h18V3H3z M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
    </g>
  </svg>
)

const MaterialArticleSharp = props => <Icon as={MaterialArticleSharpSvg} {...props} />

MaterialArticleSharp.defaultProps = { ...Icon.defaultProps }

MaterialArticleSharp.propTypes = { ...Icon.propTypes }

export default MaterialArticleSharp