import React from 'react'

import Icon from '../Icon'

const MaterialDoneOutlineSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z" />
  </svg>
)

const MaterialDoneOutline = props => <Icon as={MaterialDoneOutlineSvg} {...props} />

MaterialDoneOutline.defaultProps = { ...Icon.defaultProps }

MaterialDoneOutline.propTypes = { ...Icon.propTypes }

export default MaterialDoneOutline
