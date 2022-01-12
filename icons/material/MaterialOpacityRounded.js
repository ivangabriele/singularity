import React from 'react';
import styled from 'styled-components';

const MaterialOpacityRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17.65,7.56L17.65,7.56L12.7,2.69c-0.39-0.38-1.01-0.38-1.4,0L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87C20,10.96,19.1,8.99,17.65,7.56z M7.75,8.99L12,4.81l4.25,4.18 c0.88,0.87,2.04,2.59,1.67,5.01H6.07C5.7,11.58,6.87,9.85,7.75,8.99z"
})));

const MaterialOpacityRounded = (styled.default || styled)(MaterialOpacityRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialOpacityRounded;