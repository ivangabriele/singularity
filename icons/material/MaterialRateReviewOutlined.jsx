import React from 'react'

import Icon from '../Icon'

const MaterialRateReviewOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9.5-2H18v-2h-5.5zm3.86-5.87c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l5.89-5.87z" />
  </svg>
)

const MaterialRateReviewOutlined = props => <Icon as={MaterialRateReviewOutlinedSvg} {...props} />

MaterialRateReviewOutlined.defaultProps = { ...Icon.defaultProps }

MaterialRateReviewOutlined.propTypes = { ...Icon.propTypes }

export default MaterialRateReviewOutlined
