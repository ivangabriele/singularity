import React from 'react';
import styled from 'styled-components';

const MaterialSeventeenMpSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M3,3v18h18V3H3z M7,5.5h3v6H8.5V7H7V5.5z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M12,7V5.5h4.87l-1.87,6 h-1.75L14.62,7H12z M18,17h-3v1.5h-1.5v-6H18V17z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "1.5",
  x: "15",
  y: "14"
}))));

const MaterialSeventeenMpSharp = (styled.default || styled)(MaterialSeventeenMpSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSeventeenMpSharp;