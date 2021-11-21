import React from 'react';
import styled from 'styled-components';

const MaterialNotificationsPausedRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm7.29-4.71L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM14.5 9.33c0 .31-.11.6-.3.84l-2.5 3.03h1.9c.5 0 .9.4.9.9s-.4.9-.9.9h-2.78c-.73 0-1.32-.59-1.32-1.32v-.01c0-.31.11-.6.3-.84l2.5-3.03h-1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.78c.73 0 1.32.59 1.32 1.33z"
}));

const MaterialNotificationsPausedRounded = (styled.default || styled)(MaterialNotificationsPausedRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialNotificationsPausedRounded;