import React from 'react'

import Icon from '../Icon'

const MaterialArtTrackSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z" />
  </svg>
)

const MaterialArtTrack = props => <Icon as={MaterialArtTrackSvg} {...props} />

MaterialArtTrack.defaultProps = { ...Icon.defaultProps }

MaterialArtTrack.propTypes = { ...Icon.propTypes }

export default MaterialArtTrack
