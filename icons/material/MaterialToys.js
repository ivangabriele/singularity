import React from 'react';
import styled from 'styled-components';

const MaterialToysSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
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
  d: "M22,14c0-1.95-1.4-3.57-3.25-3.92L17.4,6.05C17,4.82,15.85,4,14.56,4H9.44C8.15,4,7,4.82,6.6,6.05L5.81,8.4L4.41,7 l0.29-0.29c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0l-2,2c-0.39,0.39-0.39,1.02,0,1.41c0.39,0.39,1.02,0.39,1.41,0 L3,8.41l1.79,1.79C3.18,10.72,2,12.22,2,14c0,1.5,0.83,2.79,2.05,3.48C4.28,18.9,5.51,20,7,20c1.3,0,2.4-0.84,2.82-2h4.37 c0.41,1.16,1.51,2,2.82,2c1.49,0,2.72-1.1,2.95-2.52C21.17,16.79,22,15.5,22,14z M7,18c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S7.55,18,7,18z M11,10H7.41L7.39,9.98l1.1-3.3C8.63,6.27,9.01,6,9.44,6H11V10z M13,6h1.56c0.43,0,0.81,0.27,0.95,0.68L16.61,10H13 V6z M17,18c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S17.55,18,17,18z"
})));

const MaterialToys = (styled.default || styled)(MaterialToysSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialToys;