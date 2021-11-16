import React from 'react'

import Icon from '../Icon'

const MaterialMergeTypeOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z" />
  </svg>
)

const MaterialMergeTypeOutlined = props => <Icon as={MaterialMergeTypeOutlinedSvg} {...props} />

MaterialMergeTypeOutlined.defaultProps = { ...Icon.defaultProps }

MaterialMergeTypeOutlined.propTypes = { ...Icon.propTypes }

export default MaterialMergeTypeOutlined