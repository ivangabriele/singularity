import React from 'react';
import styled from 'styled-components';

const MaterialWineBarRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  enableSource: "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7,3C6.45,3,6,3.45,6,4l0,5c0,2.97,2.16,5.43,5,5.91V19H9c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1h-2v-4.09c2.84-0.48,5-2.94,5-5.91l0-5c0-0.55-0.45-1-1-1H7z M16,8H8l0-3h8C16,5,16,8,16,8z"
}));

const MaterialWineBarRounded = (styled.default || styled)(MaterialWineBarRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWineBarRounded;