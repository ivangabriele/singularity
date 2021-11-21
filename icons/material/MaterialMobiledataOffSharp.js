import React from 'react';
import styled from 'styled-components';

const MaterialMobiledataOffSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "16,7 19,7 15,3 11,7 14,7 14,11.17 16,13.17"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "2.81,2.81 1.39,4.22 8,10.83 8,17.01 5,17.02 9,21 13,17 10,17.01 10,12.83 19.78,22.61 21.19,21.19"
}))));

const MaterialMobiledataOffSharp = (styled.default || styled)(MaterialMobiledataOffSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMobiledataOffSharp;