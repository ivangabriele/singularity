import React from 'react'

import Icon from '../Icon'

const MaterialAssignmentLateOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 15h2v2h-2zm0-8h2v6h-2zm8-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
  </svg>
)

const MaterialAssignmentLateOutlined = props => <Icon as={MaterialAssignmentLateOutlinedSvg} {...props} />

MaterialAssignmentLateOutlined.defaultProps = { ...Icon.defaultProps }

MaterialAssignmentLateOutlined.propTypes = { ...Icon.propTypes }

export default MaterialAssignmentLateOutlined
