import React from 'react';
import styled from 'styled-components';

const MaterialRotateNine0DegreesCcwTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.35 9.24L3.69 12.9l3.65 3.66L11 12.9z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zm0 10.15L3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66zm12.02-9.92C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"
}));

const MaterialRotateNine0DegreesCcwTwoTone = (styled.default || styled)(MaterialRotateNine0DegreesCcwTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialRotateNine0DegreesCcwTwoTone;