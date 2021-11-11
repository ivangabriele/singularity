import React from 'react'

import Icon from '../Icon'

const MaterialVideogameAssetTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M3 16h18V8H3v8zm15.5-7c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-4 3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM4 11h2V9h2v2h2v2H8v2H6v-2H4v-2z"
      opacity=".3"
    />
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z" />
    <circle cx="14.5" cy="13.5" r="1.5" />
    <circle cx="18.5" cy="10.5" r="1.5" />
  </svg>
)

const MaterialVideogameAssetTwoTone = props => <Icon as={MaterialVideogameAssetTwoToneSvg} {...props} />

MaterialVideogameAssetTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialVideogameAssetTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialVideogameAssetTwoTone
