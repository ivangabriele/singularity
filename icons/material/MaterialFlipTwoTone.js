import React from 'react';
import styled from 'styled-components';

const MaterialFlipTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 7h2v2h-2zm0 14c1.1 0 2-.9 2-2h-2v2zm0-6h2v2h-2zm0-4h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zm10-2v2h2c0-1.1-.9-2-2-2zm-8-2h2v22h-2zm4 2h2v2h-2zm0 16h2v2h-2z"
}));

const MaterialFlipTwoTone = (styled.default || styled)(MaterialFlipTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFlipTwoTone;