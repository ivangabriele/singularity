import React from 'react';
import styled from 'styled-components';

const MaterialTheaterComedySharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M11,2v5.5h3.5v3.31C14.55,9.8,15.64,9,16.99,9c1.38,0,2.5,0.84,2.5,1.88H14.5v3.56C15.26,14.8,16.11,15,17,15 c3.31,0,6-2.69,6-6V2H11z M15,7.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,7.5,15,7.5z M19,7.5c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S19.55,7.5,19,7.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1,16c0,3.31,2.69,6,6,6s6-2.69,6-6V9H1V16z M7,17.88c-1.38,0-2.5-0.84-2.5-1.88h5C9.5,17.04,8.38,17.88,7,17.88z M9,12.5 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S8.45,12.5,9,12.5z M5,12.5c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1 S4.45,12.5,5,12.5z"
}))));

const MaterialTheaterComedySharp = (styled.default || styled)(MaterialTheaterComedySharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTheaterComedySharp;