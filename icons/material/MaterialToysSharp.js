import React from 'react';
import styled from 'styled-components';

const MaterialToysSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", {
  display: "none"
}, /*#__PURE__*/React.createElement("rect", {
  display: "inline",
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18.72,10l-2-6H7.28L5.81,8.4L4.41,7l1-1L4,4.59L0.59,8L2,9.41l1-1L4.59,10H2v8h2.18C4.59,19.16,5.7,20,7,20 c1.3,0,2.4-0.84,2.82-2h4.37c0.41,1.16,1.51,2,2.82,2c1.3,0,2.41-0.84,2.82-2H22v-8H18.72z M7,18c-0.55,0-1-0.45-1-1s0.45-1,1-1 s1,0.45,1,1S7.55,18,7,18z M11,10H7.41L7.39,9.98L8.72,6c0,0,0,0,0,0H11V10z M13,10V6h2.28l1.33,4H13z M17,18c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S17.55,18,17,18z"
})));

const MaterialToysSharp = (styled.default || styled)(MaterialToysSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialToysSharp;