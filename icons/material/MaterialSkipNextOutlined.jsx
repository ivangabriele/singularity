import React from 'react'

import Icon from '../Icon'

const MaterialSkipNextOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z" />
  </svg>
)

const MaterialSkipNextOutlined = props => <Icon as={MaterialSkipNextOutlinedSvg} {...props} />

MaterialSkipNextOutlined.defaultProps = { ...Icon.defaultProps }

MaterialSkipNextOutlined.propTypes = { ...Icon.propTypes }

export default MaterialSkipNextOutlined
