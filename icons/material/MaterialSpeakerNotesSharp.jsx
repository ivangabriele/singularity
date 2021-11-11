import React from 'react'

import Icon from '../Icon'

const MaterialSpeakerNotesSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2.01L2 22l4-4h16V2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z" />
  </svg>
)

const MaterialSpeakerNotesSharp = props => <Icon as={MaterialSpeakerNotesSharpSvg} {...props} />

MaterialSpeakerNotesSharp.defaultProps = { ...Icon.defaultProps }

MaterialSpeakerNotesSharp.propTypes = { ...Icon.propTypes }

export default MaterialSpeakerNotesSharp
