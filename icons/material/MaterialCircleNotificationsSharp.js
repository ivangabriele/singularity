import React from 'react';
import styled from 'styled-components';

const MaterialCircleNotificationsSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18.5L12,18.5c-0.83,0-1.5-0.67-1.5-1.5v0h3v0 C13.5,17.83,12.83,18.5,12,18.5z M17,16H7v-2h1v-3c0-1.86,1.28-3.41,3-3.86V5.5h2v1.64c1.72,0.45,3,2,3,3.86v3h1V16z"
})));

const MaterialCircleNotificationsSharp = (styled.default || styled)(MaterialCircleNotificationsSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialCircleNotificationsSharp;