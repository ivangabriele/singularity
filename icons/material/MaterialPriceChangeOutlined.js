import React from 'react';
import styled from 'styled-components';

const MaterialPriceChangeOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M8,17h2v-1h1c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1H8v-1h4V8h-2V7H8v1H7C6.45,8,6,8.45,6,9v3c0,0.55,0.45,1,1,1h3v1H6v2 h2V17z M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4V6h16V18z M14,10l2-2l2,2 M18,14.25l-2,2l-2-2"
}))));

const MaterialPriceChangeOutlined = (styled.default || styled)(MaterialPriceChangeOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPriceChangeOutlined;