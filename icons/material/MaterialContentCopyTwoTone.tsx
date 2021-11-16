import React from 'react'

import Icon from '../Icon'

const MaterialContentCopyTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 7h11v14H8z" opacity=".3" />
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
)

const MaterialContentCopyTwoTone = props => <Icon as={MaterialContentCopyTwoToneSvg} {...props} />

MaterialContentCopyTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialContentCopyTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialContentCopyTwoTone