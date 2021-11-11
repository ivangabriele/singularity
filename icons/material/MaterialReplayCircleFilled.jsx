import React from 'react'

import Icon from '../Icon'

const MaterialReplayCircleFilledSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 10c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4v3L8 7l4-4v3c3.31 0 6 2.69 6 6z"
      fill-rule="evenodd"
    />
  </svg>
)

const MaterialReplayCircleFilled = props => <Icon as={MaterialReplayCircleFilledSvg} {...props} />

MaterialReplayCircleFilled.defaultProps = { ...Icon.defaultProps }

MaterialReplayCircleFilled.propTypes = { ...Icon.propTypes }

export default MaterialReplayCircleFilled
