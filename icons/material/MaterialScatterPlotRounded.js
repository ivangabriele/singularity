import React from 'react';
import styled from 'styled-components';

const MaterialScatterPlotRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "14",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "6",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.6",
  cy: "17.6",
  r: "3"
}));

const MaterialScatterPlotRounded = (styled.default || styled)(MaterialScatterPlotRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialScatterPlotRounded;