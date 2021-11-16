import React from 'react'

import Icon from '../Icon'

const MaterialQuestionAnswerRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" />
  </svg>
)

const MaterialQuestionAnswerRounded = props => <Icon as={MaterialQuestionAnswerRoundedSvg} {...props} />

MaterialQuestionAnswerRounded.defaultProps = { ...Icon.defaultProps }

MaterialQuestionAnswerRounded.propTypes = { ...Icon.propTypes }

export default MaterialQuestionAnswerRounded