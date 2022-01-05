import React from 'react';
import styled from 'styled-components';

const MaterialOneKPlusRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8.25,15L8.25,15 c-0.41,0-0.75-0.34-0.75-0.75V10.5H6.75C6.34,10.5,6,10.16,6,9.75v0C6,9.34,6.34,9,6.75,9H8c0.55,0,1,0.45,1,1v4.25 C9,14.66,8.66,15,8.25,15z M13.54,14.73L12,12.75v1.55c0,0.39-0.31,0.7-0.7,0.7H11.2c-0.39,0-0.7-0.31-0.7-0.7V9.7 c0-0.39,0.31-0.7,0.7-0.7h0.09C11.69,9,12,9.31,12,9.7v1.55l1.54-1.98C13.67,9.1,13.88,9,14.09,9h0c0.58,0,0.91,0.66,0.56,1.12 L13.25,12l1.41,1.88C15,14.34,14.67,15,14.09,15h0C13.88,15,13.67,14.9,13.54,14.73z M18.5,12.5h-1v1c0,0.28-0.22,0.5-0.5,0.5l0,0 c-0.28,0-0.5-0.22-0.5-0.5v-1h-1c-0.28,0-0.5-0.22-0.5-0.5v0c0-0.28,0.22-0.5,0.5-0.5h1v-1c0-0.28,0.22-0.5,0.5-0.5l0,0 c0.28,0,0.5,0.22,0.5,0.5v1h1c0.28,0,0.5,0.22,0.5,0.5v0C19,12.28,18.78,12.5,18.5,12.5z"
})));

const MaterialOneKPlusRounded = (styled.default || styled)(MaterialOneKPlusRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialOneKPlusRounded;