import React from 'react';
import styled from 'styled-components';

const MaterialPersonAddDisabledRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.48 11.95c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 .18.03.35.05.52l3.43 3.43zm2.21 2.21l5.74 5.74c.33-.17.57-.5.57-.9v-1c0-2.14-3.56-3.5-6.31-3.84zM2.12 2.42c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L4 7.12V10H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v1c0 .55.45 1 1 1h8.88l3.29 3.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L2.12 2.42zM6 10v-.88l.88.88H6z"
}));

const MaterialPersonAddDisabledRounded = (styled.default || styled)(MaterialPersonAddDisabledRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialPersonAddDisabledRounded;