import React from 'react';
import styled from 'styled-components';

const MaterialBubbleChartTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 12c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15.01",
  cy: "18",
  opacity: ".3",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "14",
  opacity: ".3",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 18c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm11.01 6c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm2.49-4c3.03 0 5.5-2.47 5.5-5.5S19.53 3 16.5 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5zm0-9C18.43 5 20 6.57 20 8.5S18.43 12 16.5 12 13 10.43 13 8.5 14.57 5 16.5 5z"
}));

const MaterialBubbleChartTwoTone = (styled.default || styled)(MaterialBubbleChartTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBubbleChartTwoTone;