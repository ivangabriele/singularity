import React from 'react';
import styled from 'styled-components';

const MaterialGridOnRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H5c-.55 0-1-.45-1-1v-3h4v4zm0-6H4v-4h4v4zm0-6H4V5c0-.55.45-1 1-1h3v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm5 12h-3v-4h4v3c0 .55-.45 1-1 1zm1-6h-4v-4h4v4zm0-6h-4V4h3c.55 0 1 .45 1 1v3z"
}));

const MaterialGridOnRounded = (styled.default || styled)(MaterialGridOnRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialGridOnRounded;