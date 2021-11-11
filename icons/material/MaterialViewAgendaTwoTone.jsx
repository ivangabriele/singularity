import React from 'react'

import Icon from '../Icon'

const MaterialViewAgendaTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 3H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H4V5h15v4zm1 4H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H4v-4h15v4z" />
    <path d="M4 15h15v4H4zM4 5h15v4H4z" opacity=".3" />
  </svg>
)

const MaterialViewAgendaTwoTone = props => <Icon as={MaterialViewAgendaTwoToneSvg} {...props} />

MaterialViewAgendaTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialViewAgendaTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialViewAgendaTwoTone
