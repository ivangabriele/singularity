import React from 'react';
import styled from 'styled-components';

const MaterialStopCircleTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8c4.41,0,8-3.59,8-8C20,7.59,16.41,4,12,4z M16,16H8V8h8V16z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "8",
  width: "8",
  x: "8",
  y: "8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 c4.41,0,8,3.59,8,8C20,16.41,16.41,20,12,20z"
}))));

const MaterialStopCircleTwoTone = (styled.default || styled)(MaterialStopCircleTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialStopCircleTwoTone;