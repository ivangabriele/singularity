import React from 'react';
import styled from 'styled-components';

const MaterialAutoFixOffSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "14.17,8.42 15.58,9.83 14.12,11.29 15.54,12.71 18.41,9.83 14.17,5.59 11.29,8.46 12.71,9.88"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "1.39,4.22 8.46,11.29 1.59,18.17 5.83,22.41 12.71,15.54 19.78,22.61 21.19,21.19 2.81,2.81"
}))));

const MaterialAutoFixOffSharp = (styled.default || styled)(MaterialAutoFixOffSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAutoFixOffSharp;