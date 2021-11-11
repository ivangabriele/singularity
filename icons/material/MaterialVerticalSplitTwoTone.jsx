import React from 'react'

import Icon from '../Icon'

const MaterialVerticalSplitTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 7h4v10h-4z" opacity=".3" />
    <path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z" />
  </svg>
)

const MaterialVerticalSplitTwoTone = props => <Icon as={MaterialVerticalSplitTwoToneSvg} {...props} />

MaterialVerticalSplitTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialVerticalSplitTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialVerticalSplitTwoTone
