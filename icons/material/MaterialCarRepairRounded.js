import React from 'react';
import styled from 'styled-components';

const MaterialCarRepairRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7,15v-1h10v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V8.69c0,0-1.34-4.03-1.56-4.69c-0.05-0.16-0.12-0.29-0.19-0.4 c-0.02-0.02-0.03-0.04-0.05-0.07C16.82,3.01,16.28,3,16.28,3H7.72c0,0-0.54,0.01-0.92,0.54C6.78,3.56,6.77,3.58,6.75,3.6 C6.68,3.71,6.61,3.84,6.56,4C6.34,4.66,5,8.69,5,8.69V15c0,0.55,0.45,1,1,1h0C6.55,16,7,15.55,7,15z M9,11.5c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S9.55,11.5,9,11.5z M15,11.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,11.5,15,11.5z M8.33,5h7.34 l0.23,0.69L16.33,7H7.67L8.33,5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4,18.01L4,18.01C4,18.55,4.45,19,4.99,19H11v2.01c0,0.55,0.45,0.99,0.99,0.99h0.01c0.55,0,0.99-0.45,0.99-0.99V19h6.01 c0.55,0,0.99-0.45,0.99-0.99v0c0-0.55-0.45-0.99-0.99-0.99H4.99C4.45,17.01,4,17.46,4,18.01z"
}))));

const MaterialCarRepairRounded = (styled.default || styled)(MaterialCarRepairRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCarRepairRounded;