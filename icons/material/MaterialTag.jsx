import React from 'react'

import Icon from '../Icon'

const MaterialTagSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z" />
  </svg>
)

const MaterialTag = props => <Icon as={MaterialTagSvg} {...props} />

MaterialTag.defaultProps = { ...Icon.defaultProps }

MaterialTag.propTypes = { ...Icon.propTypes }

export default MaterialTag
