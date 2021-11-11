import React from 'react'

import Icon from '../Icon'

const MaterialGridGoldenratioRoundedSvg = props => (
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
      <path d="M21,13h-6v-2h6c0.55,0,1-0.45,1-1s-0.45-1-1-1h-6V3c0-0.55-0.45-1-1-1s-1,0.45-1,1v6h-2V3c0-0.55-0.45-1-1-1S9,2.45,9,3v6 H3c-0.55,0-1,0.45-1,1s0.45,1,1,1h6v2H3c-0.55,0-1,0.45-1,1s0.45,1,1,1h6v6c0,0.55,0.45,1,1,1s1-0.45,1-1v-6h2v6c0,0.55,0.45,1,1,1 s1-0.45,1-1v-6h6c0.55,0,1-0.45,1-1S21.55,13,21,13z M13,13h-2v-2h2V13z" />
    </g>
  </svg>
)

const MaterialGridGoldenratioRounded = props => <Icon as={MaterialGridGoldenratioRoundedSvg} {...props} />

MaterialGridGoldenratioRounded.defaultProps = { ...Icon.defaultProps }

MaterialGridGoldenratioRounded.propTypes = { ...Icon.propTypes }

export default MaterialGridGoldenratioRounded
