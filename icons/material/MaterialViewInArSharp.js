import React from 'react';
import styled from 'styled-components';

const MaterialViewInArSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "18,1 18,3 21,3 21,6 23,6 23,1"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "21,21 18,21 18,23 23,23 23,18 21,18"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "3,3 6,3 6,1 1,1 1,6 3,6"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "3,18 1,18 1,23 6,23 6,21 3,21"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,7.97l-7-4.03L5,7.97v8.06l7,4.03l7-4.03V7.97z M11,17.17l-4-2.3v-4.63l4,2.33V17.17z M12,10.84L8.04,8.53L12,6.25 l3.96,2.28L12,10.84z M17,14.87l-4,2.3v-4.6l4-2.33V14.87z"
}))));

const MaterialViewInArSharp = (styled.default || styled)(MaterialViewInArSharpSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialViewInArSharp;