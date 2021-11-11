import React from 'react'

import Icon from '../Icon'

const MaterialStickyNoteTwoSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M19,3H4.99C3.89,3,3,3.9,3,5l0.01,14c0,1.1,0.89,2,1.99,2h10l6-6V5C21,3.9,20.1,3,19,3z M7,8h10v2H7V8z M12,14H7v-2h5V14z M14,19.5V14h5.5L14,19.5z" />
  </svg>
)

const MaterialStickyNoteTwo = props => <Icon as={MaterialStickyNoteTwoSvg} {...props} />

MaterialStickyNoteTwo.defaultProps = { ...Icon.defaultProps }

MaterialStickyNoteTwo.propTypes = { ...Icon.propTypes }

export default MaterialStickyNoteTwo
