import React from 'react';
import styled from 'styled-components';

const MaterialChangeCircleTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12.06,13.34v2.14 c-0.92,0.02-1.84-0.31-2.54-1.01c-1.12-1.12-1.3-2.8-0.59-4.13l-1.1-1.1c-1.28,1.94-1.07,4.59,0.64,6.29C9.44,16.51,10.72,17,12,17 c0.02,0,0.04,0,0.06,0V19l2.83-2.83L12.06,13.34z M15.54,8.46c-0.99-0.99-2.3-1.46-3.6-1.45V5L9.11,7.83l2.83,2.83V8.51 c0.02,0,0.04,0,0.06,0c0.9,0,1.79,0.34,2.48,1.02c1.12,1.12,1.3,2.8,0.59,4.13l1.1,1.1C17.45,12.82,17.24,10.17,15.54,8.46z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z M12.06,13.34v2.14c-0.92,0.02-1.84-0.31-2.54-1.01c-1.12-1.12-1.3-2.8-0.59-4.13l-1.1-1.1 c-1.28,1.94-1.07,4.59,0.64,6.29C9.44,16.51,10.72,17,12,17c0.02,0,0.04,0,0.06,0V19l2.83-2.83L12.06,13.34z M15.54,8.46 c-0.99-0.99-2.3-1.46-3.6-1.45V5L9.11,7.83l2.83,2.83V8.51c0.02,0,0.04,0,0.06,0c0.9,0,1.79,0.34,2.48,1.02 c1.12,1.12,1.3,2.8,0.59,4.13l1.1,1.1C17.45,12.82,17.24,10.17,15.54,8.46z"
}));

const MaterialChangeCircleTwoTone = (styled.default || styled)(MaterialChangeCircleTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialChangeCircleTwoTone;