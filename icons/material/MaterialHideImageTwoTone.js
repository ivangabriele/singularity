import React from 'react';
import styled from 'styled-components';

const MaterialHideImageTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "16.17,19 14.17,17 6,17 9,13 11.25,16 12.07,14.9 5,7.83 5,19"
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "7.83,5 19,16.17 19,5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,5v11.17l2,2V5c0-1.1-0.9-2-2-2H5.83l2,2H19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61l1.41-1.41L2.81,2.81z M5,19V7.83l7.07,7.07L11.25,16 L9,13l-3,4h8.17l2,2H5z"
}))));

const MaterialHideImageTwoTone = (styled.default || styled)(MaterialHideImageTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialHideImageTwoTone;