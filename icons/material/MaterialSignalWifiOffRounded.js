import React from 'react';
import styled from 'styled-components';

const MaterialSignalWifiOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.64 7c-.45-.34-4.93-4-11.64-4-1.32 0-2.55.14-3.69.38L18.43 13.5 23.64 7zM4.12 2.01c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.35 1.35C1.91 5.76.59 6.82.36 7l10.08 12.56c.8 1 2.32 1 3.12 0l2.35-2.93 2.61 2.61c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.12 2.01z"
}));

const MaterialSignalWifiOffRounded = (styled.default || styled)(MaterialSignalWifiOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialSignalWifiOffRounded;