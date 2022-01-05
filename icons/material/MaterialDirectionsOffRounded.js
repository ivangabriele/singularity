import React from 'react';
import styled from 'styled-components';

const MaterialDirectionsOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.71,11.29l-9-9c-0.39-0.39-1.02-0.39-1.41,0L8.21,5.38L13,10.17l0-2.67l3.15,3.15c0.2,0.2,0.2,0.51,0,0.71l-0.98,0.98 l3.45,3.45l3.09-3.09C22.09,12.32,22.09,11.69,21.71,11.29z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6.79,6.79L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l3.28,3.28l-3.09,3.09 c-0.39,0.39-0.39,1.02,0,1.41l9,9c0.39,0.39,1.02,0.39,1.41,0l3.09-3.09l3.28,3.28c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L6.79,6.79z M9.99,14c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1v-3c0-0.05,0.02-0.1,0.03-0.15l1.97,1.97 V14z"
})))));

const MaterialDirectionsOffRounded = (styled.default || styled)(MaterialDirectionsOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDirectionsOffRounded;