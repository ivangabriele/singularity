import React from 'react'

import Icon from '../Icon'

const MaterialStarPurplefive00RoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
    </g>
    <g>
      <path d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M9.58,10H5.12 c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81 c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6c0.79-0.57,0.39-1.81-0.58-1.81h-4.46l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0 L9.58,10z" />
    </g>
  </svg>
)

const MaterialStarPurplefive00Rounded = props => <Icon as={MaterialStarPurplefive00RoundedSvg} {...props} />

MaterialStarPurplefive00Rounded.defaultProps = { ...Icon.defaultProps }

MaterialStarPurplefive00Rounded.propTypes = { ...Icon.propTypes }

export default MaterialStarPurplefive00Rounded
