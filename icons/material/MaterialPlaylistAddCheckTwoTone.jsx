import React from 'react'

import Icon from '../Icon'

const MaterialPlaylistAddCheckTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <rect height="2" width="11" x="3" y="10" />
        <rect height="2" width="11" x="3" y="6" />
        <rect height="2" width="7" x="3" y="14" />
        <polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34" />
      </g>
    </g>
  </svg>
)

const MaterialPlaylistAddCheckTwoTone = props => <Icon as={MaterialPlaylistAddCheckTwoToneSvg} {...props} />

MaterialPlaylistAddCheckTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPlaylistAddCheckTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPlaylistAddCheckTwoTone
