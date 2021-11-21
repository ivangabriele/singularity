import React from 'react';
import styled from 'styled-components';

const MaterialDataSaverOnRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M11,11H9c-0.55,0-1,0.45-1,1s0.45,1,1,1h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2h2c0.55,0,1-0.45,1-1s-0.45-1-1-1h-2V9 c0-0.55-0.45-1-1-1s-1,0.45-1,1V11z M12,19c-3.87,0-7-3.13-7-7c0-3.53,2.61-6.43,6-6.92V2.05C5.94,2.55,2,6.81,2,12 c0,5.52,4.47,10,9.99,10c3.31,0,6.24-1.61,8.06-4.09l-2.6-1.53C16.17,17.98,14.21,19,12,19z M13,2.05v3.03c3.39,0.49,6,3.39,6,6.92 c0,0.9-0.18,1.75-0.48,2.54l2.6,1.53C21.68,14.83,22,13.45,22,12C22,6.82,18.05,2.55,13,2.05z"
})));

const MaterialDataSaverOnRounded = (styled.default || styled)(MaterialDataSaverOnRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDataSaverOnRounded;