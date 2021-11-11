import React from 'react'

import Icon from '../Icon'

const MaterialTrendingFlatOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 12l-4-4v3H3v2h15v3l4-4z" />
  </svg>
)

const MaterialTrendingFlatOutlined = props => <Icon as={MaterialTrendingFlatOutlinedSvg} {...props} />

MaterialTrendingFlatOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTrendingFlatOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTrendingFlatOutlined
