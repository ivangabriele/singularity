import React from 'react'

import Icon from '../Icon'

const MaterialDangerousSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74L15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z" />
  </svg>
)

const MaterialDangerous = props => <Icon as={MaterialDangerousSvg} {...props} />

MaterialDangerous.defaultProps = { ...Icon.defaultProps }

MaterialDangerous.propTypes = { ...Icon.propTypes }

export default MaterialDangerous
