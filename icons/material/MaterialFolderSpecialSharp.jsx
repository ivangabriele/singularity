import React from 'react'

import Icon from '../Icon'

const MaterialFolderSpecialSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 6H12l-2-2H2v16h20V6zm-4.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z" />
  </svg>
)

const MaterialFolderSpecialSharp = props => <Icon as={MaterialFolderSpecialSharpSvg} {...props} />

MaterialFolderSpecialSharp.defaultProps = { ...Icon.defaultProps }

MaterialFolderSpecialSharp.propTypes = { ...Icon.propTypes }

export default MaterialFolderSpecialSharp
