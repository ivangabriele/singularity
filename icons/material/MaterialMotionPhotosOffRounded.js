import React from 'react';
import styled from 'styled-components';

const MaterialMotionPhotosOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,6c-0.92,0-1.8,0.22-2.58,0.59l7.99,7.99C17.78,13.8,18,12.92,18,12C18,8.69,15.31,6,12,6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.1,3.51L2.1,3.51c-0.39,0.39-0.39,1.03,0,1.42l1.56,1.56c-1.25,1.88-1.88,4.21-1.59,6.7c0.52,4.54,4.21,8.23,8.75,8.75 c2.49,0.28,4.81-0.34,6.69-1.59l1.56,1.56c0.39,0.39,1.03,0.39,1.42,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51 C3.13,3.13,2.49,3.12,2.1,3.51z M12,20c-4.41,0-8-3.59-8-8c0-1.48,0.41-2.86,1.12-4.06l1.47,1.47C6.22,10.2,6,11.08,6,12 c0,3.31,2.69,6,6,6c0.92,0,1.8-0.22,2.58-0.59l1.47,1.47C14.86,19.59,13.48,20,12,20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,4c4.41,0,8,3.59,8,8c0,1.48-0.41,2.86-1.12,4.05l1.45,1.45C21.39,15.93,22,14.04,22,12c0-5.52-4.48-10-10-10 C9.96,2,8.07,2.61,6.49,3.66l1.45,1.45C9.14,4.41,10.52,4,12,4z"
}))));

const MaterialMotionPhotosOffRounded = (styled.default || styled)(MaterialMotionPhotosOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialMotionPhotosOffRounded;