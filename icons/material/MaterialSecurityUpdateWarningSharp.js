import React from 'react';
import styled from 'styled-components';

const MaterialSecurityUpdateWarningSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "11",
  y: "15"
}), /*#__PURE__*/React.createElement("rect", {
  height: "6",
  width: "2",
  x: "11",
  y: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.01,1v22H19V1H5.01z M17,18H7V6h10V18z"
}))));

const MaterialSecurityUpdateWarningSharp = (styled.default || styled)(MaterialSecurityUpdateWarningSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSecurityUpdateWarningSharp;