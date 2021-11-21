import React from 'react';
import styled from 'styled-components';

const MaterialShareLocationRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M13.02,20.77L13.02,20.77c0,0.64,0.59,1.13,1.21,0.99c1.12-0.26,2.18-0.7,3.12-1.3c0.53-0.34,0.61-1.1,0.16-1.55l0,0 c-0.32-0.32-0.83-0.4-1.21-0.16c-0.77,0.49-1.62,0.85-2.53,1.05C13.32,19.9,13.02,20.31,13.02,20.77z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.03,12c0-3.79,2.65-6.97,6.2-7.79c0.44-0.1,0.75-0.51,0.75-0.96v0c0-0.64-0.6-1.13-1.22-0.98 C5.33,3.29,2.03,7.26,2.03,12c0,4.74,3.3,8.71,7.73,9.74c0.62,0.15,1.22-0.34,1.22-0.98v0c0-0.46-0.31-0.86-0.75-0.96 C6.68,18.97,4.03,15.79,4.03,12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.79,11L20.79,11c0.64,0,1.13-0.59,0.99-1.21c-0.26-1.12-0.7-2.17-1.3-3.12c-0.34-0.54-1.1-0.61-1.55-0.16l0,0 c-0.32,0.32-0.4,0.83-0.15,1.21c0.49,0.76,0.85,1.61,1.05,2.53C19.92,10.7,20.33,11,20.79,11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.35,3.55c-0.95-0.6-2-1.04-3.12-1.3c-0.62-0.14-1.21,0.35-1.21,0.98v0c0,0.45,0.3,0.87,0.74,0.96 c0.91,0.2,1.77,0.57,2.53,1.05c0.39,0.24,0.89,0.17,1.21-0.16l0,0C17.96,4.64,17.89,3.89,17.35,3.55z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.92,17.49L18.92,17.49c0.45,0.45,1.21,0.38,1.55-0.16c0.6-0.94,1.04-2,1.3-3.12c0.14-0.62-0.35-1.21-0.98-1.21h0 c-0.45,0-0.87,0.3-0.96,0.74c-0.2,0.91-0.57,1.77-1.05,2.53C18.52,16.66,18.6,17.17,18.92,17.49z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16,11.1C16,8.61,14.1,7,12,7s-4,1.61-4,4.1c0,1.51,1.1,3.28,3.31,5.3c0.39,0.36,0.98,0.36,1.38,0 C14.9,14.37,16,12.61,16,11.1z M12,12c-0.59,0-1.07-0.48-1.07-1.07c0-0.59,0.48-1.07,1.07-1.07s1.07,0.48,1.07,1.07 C13.07,11.52,12.59,12,12,12z"
}))));

const MaterialShareLocationRounded = (styled.default || styled)(MaterialShareLocationRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialShareLocationRounded;