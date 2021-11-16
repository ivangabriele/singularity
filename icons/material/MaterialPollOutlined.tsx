import React from 'react'

import Icon from '../Icon'

const MaterialPollOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
  </svg>
)

const MaterialPollOutlined = props => <Icon as={MaterialPollOutlinedSvg} {...props} />

MaterialPollOutlined.defaultProps = { ...Icon.defaultProps }

MaterialPollOutlined.propTypes = { ...Icon.propTypes }

export default MaterialPollOutlined