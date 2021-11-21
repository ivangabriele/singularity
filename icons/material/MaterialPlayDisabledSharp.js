import React from 'react';
import styled from 'styled-components';

const MaterialPlayDisabledSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  points: "16.45,13.62 19,12 8,5 8,5.17"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "2.81,2.81 1.39,4.22 8,10.83 8,19 12.99,15.82 19.78,22.61 21.19,21.19"
}))));

const MaterialPlayDisabledSharp = (styled.default || styled)(MaterialPlayDisabledSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPlayDisabledSharp;