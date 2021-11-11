import React from 'react'

import Icon from '../Icon'

const MaterialHorizontalSplitRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 19h16c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm0-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
  </svg>
)

const MaterialHorizontalSplitRounded = props => <Icon as={MaterialHorizontalSplitRoundedSvg} {...props} />

MaterialHorizontalSplitRounded.defaultProps = { ...Icon.defaultProps }

MaterialHorizontalSplitRounded.propTypes = { ...Icon.propTypes }

export default MaterialHorizontalSplitRounded
