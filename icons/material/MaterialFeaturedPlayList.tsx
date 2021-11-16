import React from 'react'

import Icon from '../Icon'

const MaterialFeaturedPlayListSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z" />
  </svg>
)

const MaterialFeaturedPlayList = props => <Icon as={MaterialFeaturedPlayListSvg} {...props} />

MaterialFeaturedPlayList.defaultProps = { ...Icon.defaultProps }

MaterialFeaturedPlayList.propTypes = { ...Icon.propTypes }

export default MaterialFeaturedPlayList