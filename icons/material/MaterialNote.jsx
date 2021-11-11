import React from 'react'

import Icon from '../Icon'

const MaterialNoteSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z" />
  </svg>
)

const MaterialNote = props => <Icon as={MaterialNoteSvg} {...props} />

MaterialNote.defaultProps = { ...Icon.defaultProps }

MaterialNote.propTypes = { ...Icon.propTypes }

export default MaterialNote
