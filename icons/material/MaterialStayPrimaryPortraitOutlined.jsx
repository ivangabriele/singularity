import React from 'react'

import Icon from '../Icon'

const MaterialStayPrimaryPortraitOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
  </svg>
)

const MaterialStayPrimaryPortraitOutlined = props => <Icon as={MaterialStayPrimaryPortraitOutlinedSvg} {...props} />

MaterialStayPrimaryPortraitOutlined.defaultProps = { ...Icon.defaultProps }

MaterialStayPrimaryPortraitOutlined.propTypes = { ...Icon.propTypes }

export default MaterialStayPrimaryPortraitOutlined
