import React from 'react'

import Icon from '../Icon'

const MaterialCallSplitSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z" />
  </svg>
)

const MaterialCallSplit = props => <Icon as={MaterialCallSplitSvg} {...props} />

MaterialCallSplit.defaultProps = { ...Icon.defaultProps }

MaterialCallSplit.propTypes = { ...Icon.propTypes }

export default MaterialCallSplit
