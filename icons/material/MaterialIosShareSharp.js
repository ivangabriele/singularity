import React from 'react';
import styled from 'styled-components';

const MaterialIosShareSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "20,8 15,8 15,10 18,10 18,21 6,21 6,10 9,10 9,8 4,8 4,23 20,23"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "11,16 13,16 13,5 16,5 12,1 8,5 11,5"
}))));

const MaterialIosShareSharp = (styled.default || styled)(MaterialIosShareSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialIosShareSharp;