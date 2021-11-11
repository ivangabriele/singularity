import React from 'react'

import Icon from '../Icon'

const MaterialDragHandleOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
  </svg>
)

const MaterialDragHandleOutlined = props => <Icon as={MaterialDragHandleOutlinedSvg} {...props} />

MaterialDragHandleOutlined.defaultProps = { ...Icon.defaultProps }

MaterialDragHandleOutlined.propTypes = { ...Icon.propTypes }

export default MaterialDragHandleOutlined
