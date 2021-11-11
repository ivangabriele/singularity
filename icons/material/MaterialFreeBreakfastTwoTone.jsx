import React from 'react'

import Icon from '../Icon'

const MaterialFreeBreakfastTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5H6v8z" opacity=".3" />
    <path d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10v8zm4-5h-2V5h2v3z" />
  </svg>
)

const MaterialFreeBreakfastTwoTone = props => <Icon as={MaterialFreeBreakfastTwoToneSvg} {...props} />

MaterialFreeBreakfastTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFreeBreakfastTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFreeBreakfastTwoTone
