import React from 'react';
import styled from 'styled-components';

const MaterialRsvpSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M16,9h1.5l-1.75,6h-1.5L12.5,9H14l1,3.43L16,9z M5.14,13L6,15H4.5l-0.85-2H2.5v2H1V9h5v4L5.14,13z M4.5,10.5h-2v1h2V10.5z M23,13h-3.5v2H18V9h5V13z M21.5,10.5h-2v1h2V10.5z M11.5,9v1.5h-3v0.75h3V15H7v-1.5h3v-0.75H7V9H11.5z"
}))));

const MaterialRsvpSharp = (styled.default || styled)(MaterialRsvpSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialRsvpSharp;