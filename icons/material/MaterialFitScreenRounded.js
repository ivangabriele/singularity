import React from 'react';
import styled from 'styled-components';

const MaterialFitScreenRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,4h2c1.1,0,2,0.9,2,2v2c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1V6h-2c-0.55,0-1-0.45-1-1v0C17,4.45,17.45,4,18,4z M4,8 l0-2h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C2.9,4,2,4.9,2,6l0,2c0,0.55,0.45,1,1,1h0C3.55,9,4,8.55,4,8z M20,16v2h-2 c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2c1.1,0,2-0.9,2-2v-2c0-0.55-0.45-1-1-1h0C20.45,15,20,15.45,20,16z M6,18H4v-2 c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2c0,1.1,0.9,2,2,2h2c0.55,0,1-0.45,1-1v0C7,18.45,6.55,18,6,18z M16,8H8c-1.1,0-2,0.9-2,2 v4c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-4C18,8.9,17.1,8,16,8z"
})));

const MaterialFitScreenRounded = (styled.default || styled)(MaterialFitScreenRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialFitScreenRounded;