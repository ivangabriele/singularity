import React from 'react'

import Icon from '../Icon'

const MaterialHPlusMobiledataOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M12,11H6V7H4v10h2v-4h6v4h2V7h-2V11z M22,11h-2V9h-2v2h-2v2h2v2h2v-2h2V11z" />
      </g>
    </g>
  </svg>
)

const MaterialHPlusMobiledataOutlined = props => <Icon as={MaterialHPlusMobiledataOutlinedSvg} {...props} />

MaterialHPlusMobiledataOutlined.defaultProps = { ...Icon.defaultProps }

MaterialHPlusMobiledataOutlined.propTypes = { ...Icon.propTypes }

export default MaterialHPlusMobiledataOutlined
