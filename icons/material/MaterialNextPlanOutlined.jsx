import React from 'react'

import Icon from '../Icon'

const MaterialNextPlanOutlinedSvg = props => (
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
        <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z" />
        <path d="M15.97,11.03C14.87,9.79,13.28,9,11.5,9c-2.82,0-5.18,1.95-5.82,4.56l0.96,0.32C7.15,11.66,9.13,10,11.5,10 c1.51,0,2.85,0.68,3.76,1.74L13,14h5V9L15.97,11.03z" />
      </g>
    </g>
  </svg>
)

const MaterialNextPlanOutlined = props => <Icon as={MaterialNextPlanOutlinedSvg} {...props} />

MaterialNextPlanOutlined.defaultProps = { ...Icon.defaultProps }

MaterialNextPlanOutlined.propTypes = { ...Icon.propTypes }

export default MaterialNextPlanOutlined
