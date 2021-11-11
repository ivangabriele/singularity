import React from 'react'

import Icon from '../Icon'

const MaterialWhereToVoteSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2c3.86 0 7 3.14 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.86 3.14-7 7-7zm-1.53 12L17 7.41 15.6 6l-5.13 5.18L8.4 9.09 7 10.5l3.47 3.5z" />
  </svg>
)

const MaterialWhereToVote = props => <Icon as={MaterialWhereToVoteSvg} {...props} />

MaterialWhereToVote.defaultProps = { ...Icon.defaultProps }

MaterialWhereToVote.propTypes = { ...Icon.propTypes }

export default MaterialWhereToVote
