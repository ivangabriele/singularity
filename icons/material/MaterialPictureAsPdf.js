import React from 'react'
import styled from 'styled-components'

const MaterialPictureAsPdfSvg = props =>
  /* #__PURE__ */ React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* #__PURE__ */ React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    }),
    /* #__PURE__ */ React.createElement('path', {
      d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z',
    }),
  )

export const MaterialPictureAsPdf = (styled.default || styled)(MaterialPictureAsPdfSvg).attrs(p => ({
  accent: p.accent || 'primary',
}))`
  fill: ${p => p.theme.color[p.accent].active};
`
