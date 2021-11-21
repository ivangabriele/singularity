import React from 'react';
import styled from 'styled-components';

const MaterialDirtyLensTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M14.12,5H9.88L8.05,7H4v12h7.27c0.14-0.98,0.42-2.05-0.16-2.43c-0.89-0.59-1.27,2.06-2.8,1.35 c-1.39-1.12,1.05-1.29,0.5-3.27c-0.22-0.79-2.28,0.36-2.4-1.24c-0.08-1,1.49-0.74,1.51-1.49c0.03-0.75-1.03-1.05-0.25-1.91 c0.22-0.24,0.71-0.26,0.91-0.19c0.79,0.27,1.55,1.82,2.51,1.19c1.03-0.66-1.88-2.35,0-2.86c1.64-0.44,1.31,2.08,2.65,2.44 c1.94,0.52,2.65-4.55,4.41-2.33c1.85,2.33-3.43,2.27-2.85,4.01c0.34,1.01,2.15-1.2,2.76,0.53c0.64,1.83-3.09,0.82-3.04,1.66 c0.06,0.83,2.41,0.55,1.64,2.12c-1.14,1.86-3-1.03-3.81,0.09c-0.39,0.57-0.09,1.49,0.13,2.33H20V7h-4.05L14.12,5z M19,17.15 c0,0.48-0.38,0.86-0.86,0.86c-0.47,0-0.86-0.38-0.86-0.86s0.38-0.86,0.86-0.86C18.61,16.29,19,16.67,19,17.15z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,5h-3.17L15,3H9L7.17,5H4C2.9,5,2,5.9,2,7v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,19h-7.02 c-0.22-0.84-0.52-1.76-0.13-2.33c0.81-1.12,2.67,1.77,3.81-0.09c0.77-1.57-1.58-1.29-1.64-2.12c-0.05-0.84,3.68,0.17,3.04-1.66 c-0.61-1.73-2.42,0.48-2.76-0.53c-0.58-1.74,4.7-1.68,2.85-4.01c-1.76-2.22-2.47,2.85-4.41,2.33c-1.34-0.36-1.01-2.88-2.65-2.44 c-1.88,0.51,1.03,2.2,0,2.86c-0.96,0.63-1.72-0.92-2.51-1.19c-0.2-0.07-0.69-0.05-0.91,0.19c-0.78,0.86,0.28,1.16,0.25,1.91 c-0.02,0.75-1.59,0.49-1.51,1.49c0.12,1.6,2.18,0.45,2.4,1.24c0.55,1.98-1.89,2.15-0.5,3.27c1.53,0.71,1.91-1.94,2.8-1.35 c0.58,0.38,0.3,1.45,0.16,2.43H4V7h4.05l1.83-2h4.24l1.83,2H20V19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.28,17.15c0,0.48,0.39,0.86,0.86,0.86c0.48,0,0.86-0.38,0.86-0.86s-0.39-0.86-0.86-0.86 C17.66,16.29,17.28,16.67,17.28,17.15z"
}))));

const MaterialDirtyLensTwoTone = (styled.default || styled)(MaterialDirtyLensTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDirtyLensTwoTone;