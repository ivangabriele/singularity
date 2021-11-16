import React from 'react'

import Icon from '../Icon'

const MaterialRateReviewRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm11 0h-6.5l2-2H17c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
)

const MaterialRateReviewRounded = props => <Icon as={MaterialRateReviewRoundedSvg} {...props} />

MaterialRateReviewRounded.defaultProps = { ...Icon.defaultProps }

MaterialRateReviewRounded.propTypes = { ...Icon.propTypes }

export default MaterialRateReviewRounded