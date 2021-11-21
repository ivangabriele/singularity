import React from 'react';
import styled from 'styled-components';

const MaterialPhotoCameraFrontSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.83,5L15,3H9L7.17,5H2v16h20V5H16.83z M12,9c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2s-2-0.9-2-2C10,9.9,10.9,9,12,9z M16,17H8 v-0.57c0-0.81,0.48-1.53,1.22-1.85C10.07,14.21,11.01,14,12,14s1.93,0.21,2.78,0.58C15.52,14.9,16,15.62,16,16.43V17z"
})));

const MaterialPhotoCameraFrontSharp = (styled.default || styled)(MaterialPhotoCameraFrontSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPhotoCameraFrontSharp;