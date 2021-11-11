import React from 'react'

import Icon from '../Icon'

const MaterialVolumeMuteTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 13h2.83L14 15.17V8.83L11.83 11H9z" opacity=".3" />
    <path d="M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z" />
  </svg>
)

const MaterialVolumeMuteTwoTone = props => <Icon as={MaterialVolumeMuteTwoToneSvg} {...props} />

MaterialVolumeMuteTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialVolumeMuteTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialVolumeMuteTwoTone
