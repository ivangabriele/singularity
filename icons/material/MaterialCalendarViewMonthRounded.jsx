import React from 'react'

import Icon from '../Icon'

const MaterialCalendarViewMonthRoundedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z" />
    </g>
  </svg>
)

const MaterialCalendarViewMonthRounded = props => <Icon as={MaterialCalendarViewMonthRoundedSvg} {...props} />

MaterialCalendarViewMonthRounded.defaultProps = { ...Icon.defaultProps }

MaterialCalendarViewMonthRounded.propTypes = { ...Icon.propTypes }

export default MaterialCalendarViewMonthRounded
