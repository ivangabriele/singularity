import React from 'react';
import styled from 'styled-components';

const MaterialDeveloperModeRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 5h10v1c0 .55.45 1 1 1s1-.45 1-1V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V5zm9.12 10.88l3.17-3.17c.39-.39.39-1.02 0-1.41l-3.17-3.17c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41L17.17 12l-2.47 2.47c-.39.39-.39 1.02 0 1.41.39.39 1.03.39 1.42 0zm-6.83-1.42L6.83 12l2.46-2.46c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0L4.7 11.3c-.39.39-.39 1.02 0 1.41l3.17 3.17c.39.39 1.03.39 1.42 0 .4-.39.39-1.03 0-1.42zM17 19H7v-1c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v1z"
}));

const MaterialDeveloperModeRounded = (styled.default || styled)(MaterialDeveloperModeRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialDeveloperModeRounded;