import React from 'react';
import styled from 'styled-components';

const MaterialSdRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,4H4C2.89,4,2,4.9,2,6v12c0,1.1,0.89,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M13,9h4c0.55,0,1,0.45,1,1v4 c0,0.55-0.45,1-1,1h-4V9z M9.5,13.5v-1H7c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1H9.5v-0.5h-2v1H10 c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-1h1.5v0.5H9.5z M14.5,13.5h2v-3h-2V13.5z"
})));

const MaterialSdRounded = (styled.default || styled)(MaterialSdRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSdRounded;