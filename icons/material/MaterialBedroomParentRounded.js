import React from 'react';
import styled from 'styled-components';

const MaterialBedroomParentRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.5,12h-9c-0.55,0-1,0.45-1,1v1h11v-1C17.5,12.45,17.05,12,16.5,12z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "4",
  x: "7.25",
  y: "8.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "4",
  x: "12.75",
  y: "8.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.25,17L18.25,17 c-0.41,0-0.75-0.34-0.75-0.75V15.5h-11v0.75C6.5,16.66,6.16,17,5.75,17h0C5.34,17,5,16.66,5,16.25v-3.08 c0-0.66,0.25-1.26,0.65-1.72V9c0-1.1,0.9-2,2-2H11c0.37,0,0.72,0.12,1,0.32C12.28,7.12,12.63,7,13,7h3.35c1.1,0,2,0.9,2,2v2.45 c0.4,0.46,0.65,1.06,0.65,1.72v3.08C19,16.66,18.66,17,18.25,17z"
}))));

const MaterialBedroomParentRounded = (styled.default || styled)(MaterialBedroomParentRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBedroomParentRounded;