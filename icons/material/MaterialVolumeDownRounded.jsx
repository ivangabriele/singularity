import React from 'react'

import Icon from '../Icon'

const MaterialVolumeDownRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L9 9H6c-.55 0-1 .45-1 1z" />
  </svg>
)

const MaterialVolumeDownRounded = props => <Icon as={MaterialVolumeDownRoundedSvg} {...props} />

MaterialVolumeDownRounded.defaultProps = { ...Icon.defaultProps }

MaterialVolumeDownRounded.propTypes = { ...Icon.propTypes }

export default MaterialVolumeDownRounded
