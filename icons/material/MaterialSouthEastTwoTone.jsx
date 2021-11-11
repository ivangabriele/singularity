import React from 'react'

import Icon from '../Icon'

const MaterialSouthEastTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M19,9h-2v6.59L5.41,4L4,5.41L15.59,17H9v2h10V9z" />
  </svg>
)

const MaterialSouthEastTwoTone = props => <Icon as={MaterialSouthEastTwoToneSvg} {...props} />

MaterialSouthEastTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialSouthEastTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialSouthEastTwoTone
