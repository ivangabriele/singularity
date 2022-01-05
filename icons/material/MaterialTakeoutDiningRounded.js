import React from 'react';
import styled from 'styled-components';

const MaterialTakeoutDiningRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.29,6.75c-0.39-0.39-1.01-0.39-1.4,0L19,7.63l0.03-0.56l-3.46-3.48C15.19,3.21,14.68,3,14.15,3h-4.3 C9.32,3,8.81,3.21,8.43,3.59L4.97,7.07L5,7.57L4.11,6.7C3.72,6.32,3.1,6.32,2.72,6.71L2.7,6.73C2.32,7.12,2.32,7.75,2.72,8.13 L4.66,10h14.69l1.92-1.84C21.67,7.78,21.68,7.14,21.29,6.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.79,18.15C5.87,19.19,6.74,20,7.79,20h8.43c1.05,0,1.92-0.81,1.99-1.85l0.49-6.6H5.3L5.79,18.15z"
}))));

const MaterialTakeoutDiningRounded = (styled.default || styled)(MaterialTakeoutDiningRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTakeoutDiningRounded;