import React from 'react'

import Icon from '../Icon'

const MaterialExitToAppSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM21 3H3v6h2V5h14v14H5v-4H3v6h18V3z" />
  </svg>
)

const MaterialExitToAppSharp = props => <Icon as={MaterialExitToAppSharpSvg} {...props} />

MaterialExitToAppSharp.defaultProps = { ...Icon.defaultProps }

MaterialExitToAppSharp.propTypes = { ...Icon.propTypes }

export default MaterialExitToAppSharp