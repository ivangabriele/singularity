import React from 'react';
import styled from 'styled-components';

const MaterialSportsBaseballRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3.81,6.28C2.67,7.9,2,9.87,2,12s0.67,4.1,1.81,5.72C6.23,16.95,8,14.68,8,12S6.23,7.05,3.81,6.28z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20.19,6.28C17.77,7.05,16,9.32,16,12s1.77,4.95,4.19,5.72C21.33,16.1,22,14.13,22,12S21.33,7.9,20.19,6.28z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M14,12c0-3.28,1.97-6.09,4.79-7.33C17.01,3.02,14.63,2,12,2S6.99,3.02,5.21,4.67C8.03,5.91,10,8.72,10,12 s-1.97,6.09-4.79,7.33C6.99,20.98,9.37,22,12,22s5.01-1.02,6.79-2.67C15.97,18.09,14,15.28,14,12z"
})))));

const MaterialSportsBaseballRounded = (styled.default || styled)(MaterialSportsBaseballRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSportsBaseballRounded;