import React from 'react';
import styled from 'styled-components';

const MaterialBungalowTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,6.78l-3,4.8V19h2v-3h2v3h2v-7.42L12,6.78z M13,14h-2v-2h2V14z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,14h-2v-2h2V14z M18.1,16.56L17,14.79V21H7v-6.2l-1.1,1.76L4.2,15.5L12,3l7.8,12.5L18.1,16.56z M15,11.59l-3-4.8l-3,4.8 V19h2v-3h2v3h2V11.59z"
}));

const MaterialBungalowTwoTone = (styled.default || styled)(MaterialBungalowTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialBungalowTwoTone;