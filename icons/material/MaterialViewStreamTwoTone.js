import React from 'react';
import styled from 'styled-components';

const MaterialViewStreamTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,17H5v-4h14V17z M5,11V7h14v4H5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,7v10c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H5C3.9,5,3,5.9,3,7z M19,17H5v-4h14V17z M5,11V7h14v4H5z"
}));

const MaterialViewStreamTwoTone = (styled.default || styled)(MaterialViewStreamTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialViewStreamTwoTone;