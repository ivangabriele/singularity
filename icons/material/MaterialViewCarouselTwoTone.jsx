import React from 'react'

import Icon from '../Icon'

const MaterialViewCarouselTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <rect height="10" opacity=".3" width="6" x="9" y="7" />
    <path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M9,7h6v10H9V7z M18,7h4v10h-4V7z" />
  </svg>
)

const MaterialViewCarouselTwoTone = props => <Icon as={MaterialViewCarouselTwoToneSvg} {...props} />

MaterialViewCarouselTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialViewCarouselTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialViewCarouselTwoTone
