import React from 'react'

import Icon from '../Icon'

const MaterialDeleteSweepSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z" />
  </svg>
)

const MaterialDeleteSweep = props => <Icon as={MaterialDeleteSweepSvg} {...props} />

MaterialDeleteSweep.defaultProps = { ...Icon.defaultProps }

MaterialDeleteSweep.propTypes = { ...Icon.propTypes }

export default MaterialDeleteSweep
