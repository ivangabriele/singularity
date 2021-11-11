import React from 'react'

import Icon from '../Icon'

const MaterialFlagTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12.36 6H7v6h7.24l.4 2H18V8h-5.24z" opacity=".3" />
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18v6z" />
  </svg>
)

const MaterialFlagTwoTone = props => <Icon as={MaterialFlagTwoToneSvg} {...props} />

MaterialFlagTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFlagTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFlagTwoTone
