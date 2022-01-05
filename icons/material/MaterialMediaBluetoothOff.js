import React from 'react';
import styled from 'styled-components';

const MaterialMediaBluetoothOffSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M9,6.17V3h6v4h-4v1.17L9,6.17z M19.42,15L22,17.57l-0.8,0.8l-6.78-6.78l0.8-0.8l2.75,2.75V9h0.6L22,12.43L19.42,15z M19.17,13.55l1.13-1.13l-1.13-1.13V13.55z M21.19,21.19l-1.41,1.41l-3.98-3.98l-0.58,0.58l-0.85-0.85l0.58-0.58L11,13.83V17 c0,2.21-1.78,4-3.99,4S3,19.21,3,17s1.79-4,4.01-4c0.73,0,1.41,0.21,2,0.55v-1.72L1.39,4.22L2.8,2.81L21.19,21.19z"
}))));

const MaterialMediaBluetoothOff = (styled.default || styled)(MaterialMediaBluetoothOffSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMediaBluetoothOff;