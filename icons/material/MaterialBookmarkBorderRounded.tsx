import React from 'react'

import Icon from '../Icon'

const MaterialBookmarkBorderRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z" />
  </svg>
)

const MaterialBookmarkBorderRounded = props => <Icon as={MaterialBookmarkBorderRoundedSvg} {...props} />

MaterialBookmarkBorderRounded.defaultProps = { ...Icon.defaultProps }

MaterialBookmarkBorderRounded.propTypes = { ...Icon.propTypes }

export default MaterialBookmarkBorderRounded