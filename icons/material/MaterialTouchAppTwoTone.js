import React from 'react';
import styled from 'styled-components';

const MaterialTouchAppTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18.19,12.44l-3.24-1.62c1.29-1,2.12-2.56,2.12-4.32c0-3.03-2.47-5.5-5.5-5.5s-5.5,2.47-5.5,5.5c0,2.13,1.22,3.98,3,4.89 v3.26c-2.08-0.44-2.01-0.44-2.26-0.44c-0.53,0-1.03,0.21-1.41,0.59L4,16.22l5.09,5.09C9.52,21.75,10.12,22,10.74,22h6.3 c0.98,0,1.81-0.7,1.97-1.67l0.8-4.71C20.03,14.32,19.38,13.04,18.19,12.44z M8.07,6.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5 c0,0.95-0.38,1.81-1,2.44V6.5c0-1.38-1.12-2.5-2.5-2.5c-1.38,0-2.5,1.12-2.5,2.5v2.44C8.45,8.31,8.07,7.45,8.07,6.5z M17.84,15.29 L17.04,20h-6.3c-0.09,0-0.17-0.04-0.24-0.1l-3.68-3.68l4.25,0.89V6.5c0-0.28,0.22-0.5,0.5-0.5c0.28,0,0.5,0.22,0.5,0.5v6h1.76 l3.46,1.73C17.69,14.43,17.91,14.86,17.84,15.29z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.3,14.23l-3.46-1.73h-1.77v-6c0-0.28-0.22-0.5-0.5-0.5 c-0.28,0-0.5,0.22-0.5,0.5v10.61l-4.25-0.89l3.68,3.68c0.06,0.06,0.15,0.1,0.24,0.1h6.3l0.8-4.71 C17.91,14.86,17.69,14.43,17.3,14.23z",
  enableSource: "new",
  opacity: ".3"
}))));

const MaterialTouchAppTwoTone = (styled.default || styled)(MaterialTouchAppTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTouchAppTwoTone;