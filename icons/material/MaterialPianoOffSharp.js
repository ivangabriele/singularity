import React from 'react';
import styled from 'styled-components';

const MaterialPianoOffSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.19,21.19L2.81,2.81L1.39,4.22L3,5.83V21h15.17l1.61,1.61L21.19,21.19z M8.25,19H5V7.83l2,2v4.67h1.25V19z M9.75,19v-4.5 H11v-0.67l3.25,3.25V19H9.75z M5.83,3H21v15.17l-2-2V5h-2v9.17l-4-4V5h-2v3.17L5.83,3z"
}));

const MaterialPianoOffSharp = (styled.default || styled)(MaterialPianoOffSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPianoOffSharp;