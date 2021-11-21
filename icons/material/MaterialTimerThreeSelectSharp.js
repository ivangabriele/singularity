import React from 'react';
import styled from 'styled-components';

const MaterialTimerThreeSelectSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21,11v2h-4v1h4v5h-6v-2h4v-1h-4v-5H21z M4,5v3h6v2.5H4v3h6V16H4v3h9V5H4z"
}));

const MaterialTimerThreeSelectSharp = (styled.default || styled)(MaterialTimerThreeSelectSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTimerThreeSelectSharp;