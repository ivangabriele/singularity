import React from 'react'

import Icon from '../Icon'

const MaterialPauseCircleTwoToneSvg = props => (
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
        <g>
          <path
            d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M11,16H9V8h2 V16z M15,16h-2V8h2V16z"
            enable-background="new"
            opacity=".3"
          />
          <rect height="8" width="2" x="13" y="8" />
          <rect height="8" width="2" x="9" y="8" />
          <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialPauseCircleTwoTone = props => <Icon as={MaterialPauseCircleTwoToneSvg} {...props} />

MaterialPauseCircleTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPauseCircleTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPauseCircleTwoTone
