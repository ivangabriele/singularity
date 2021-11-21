import React from 'react';
import styled from 'styled-components';

const MaterialPersonAddAltTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  opacity: ".3",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.48,16.34C13.29,15.73,11.37,15,9,15c-2.37,0-4.29,0.73-5.48,1.34C3.2,16.5,3,16.84,3,17.22V18h12v-0.78 C15,16.84,14.8,16.5,14.48,16.34z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "20,9 20,6 18,6 18,9 15,9 15,11 18,11 18,14 20,14 20,11 23,11 23,9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56C1.61,15.07,1,16.1,1,17.22V20h16v-2.78 C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34 C14.8,16.5,15,16.84,15,17.22V18z"
}))));

const MaterialPersonAddAltTwoTone = (styled.default || styled)(MaterialPersonAddAltTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPersonAddAltTwoTone;