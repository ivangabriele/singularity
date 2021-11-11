import React from 'react'

import Icon from '../Icon'

const MaterialQueueMusicSvg = props => (
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
      <path d="M15,6H3v2h12V6z M15,10H3v2h12V10z M3,16h8v-2H3V16z M17,6v8.18C16.69,14.07,16.35,14,16,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 s3-1.34,3-3V8h3V6H17z" />
    </g>
  </svg>
)

const MaterialQueueMusic = props => <Icon as={MaterialQueueMusicSvg} {...props} />

MaterialQueueMusic.defaultProps = { ...Icon.defaultProps }

MaterialQueueMusic.propTypes = { ...Icon.propTypes }

export default MaterialQueueMusic
