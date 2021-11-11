import React from 'react'

import Icon from '../Icon'

const MaterialHttpOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
    <path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z" />
  </svg>
)

const MaterialHttpOutlined = props => <Icon as={MaterialHttpOutlinedSvg} {...props} />

MaterialHttpOutlined.defaultProps = { ...Icon.defaultProps }

MaterialHttpOutlined.propTypes = { ...Icon.propTypes }

export default MaterialHttpOutlined
