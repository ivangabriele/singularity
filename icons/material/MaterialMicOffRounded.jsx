import React from 'react'

import Icon from '../Icon'

const MaterialMicOffRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65L15 10.6zm3.08.4c-.41 0-.77.3-.83.71-.05.32-.12.64-.22.93l1.27 1.27c.3-.6.52-1.25.63-1.94.07-.51-.33-.97-.85-.97zM3.71 3.56c-.39.39-.39 1.02 0 1.41L9 10.27v.43c0 1.19.6 2.32 1.63 2.91.75.43 1.41.44 2.02.31l1.66 1.66c-.71.33-1.5.52-2.31.52-2.54 0-4.88-1.77-5.25-4.39-.06-.41-.42-.71-.83-.71-.52 0-.92.46-.85.97.46 2.96 2.96 5.3 5.93 5.75V20c0 .55.45 1 1 1s1-.45 1-1v-2.28c.91-.13 1.77-.45 2.55-.9l3.49 3.49c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.12 3.56c-.39-.39-1.02-.39-1.41 0z" />
  </svg>
)

const MaterialMicOffRounded = props => <Icon as={MaterialMicOffRoundedSvg} {...props} />

MaterialMicOffRounded.defaultProps = { ...Icon.defaultProps }

MaterialMicOffRounded.propTypes = { ...Icon.propTypes }

export default MaterialMicOffRounded
