import React from 'react';
import styled from 'styled-components';

const MaterialLocalCafeTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 15h6c1.1 0 2-.9 2-2V5H6v8c0 1.1.9 2 2 2z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 19h18v2H2zm2-6c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H4v10zm14-8h2v3h-2V5zM6 5h10v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5z"
}));

const MaterialLocalCafeTwoTone = (styled.default || styled)(MaterialLocalCafeTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialLocalCafeTwoTone;