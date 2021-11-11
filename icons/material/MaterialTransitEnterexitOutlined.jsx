import React from 'react'

import Icon from '../Icon'

const MaterialTransitEnterexitOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z" />
  </svg>
)

const MaterialTransitEnterexitOutlined = props => <Icon as={MaterialTransitEnterexitOutlinedSvg} {...props} />

MaterialTransitEnterexitOutlined.defaultProps = { ...Icon.defaultProps }

MaterialTransitEnterexitOutlined.propTypes = { ...Icon.propTypes }

export default MaterialTransitEnterexitOutlined
