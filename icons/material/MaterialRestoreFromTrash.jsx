import React from 'react'

import Icon from '../Icon'

const MaterialRestoreFromTrashSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 7v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm8 7v4h-4v-4H8l4-4 4 4h-2z" />
  </svg>
)

const MaterialRestoreFromTrash = props => <Icon as={MaterialRestoreFromTrashSvg} {...props} />

MaterialRestoreFromTrash.defaultProps = { ...Icon.defaultProps }

MaterialRestoreFromTrash.propTypes = { ...Icon.propTypes }

export default MaterialRestoreFromTrash
