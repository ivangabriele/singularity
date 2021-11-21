import React from 'react';
import styled from 'styled-components';

const MaterialMobiledataOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16,7h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.79c-0.2-0.2-0.51-0.2-0.71,0l-2.79,2.79C11.54,6.46,11.76,7,12.21,7H14 v4.17l2,2V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.1,3.51L2.1,3.51c-0.39,0.39-0.39,1.02,0,1.41l5.9,5.9v6.18l-1.79,0c-0.45,0-0.67,0.54-0.35,0.85l2.79,2.78 c0.2,0.19,0.51,0.19,0.71,0l2.79-2.79c0.32-0.32,0.09-0.85-0.35-0.85l-1.79,0v-4.18l9.07,9.07c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51C3.12,3.12,2.49,3.12,2.1,3.51z"
}))));

const MaterialMobiledataOffRounded = (styled.default || styled)(MaterialMobiledataOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMobiledataOffRounded;