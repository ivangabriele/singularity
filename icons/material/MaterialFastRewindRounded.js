import React from 'react';
import styled from 'styled-components';

const MaterialFastRewindRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81zm1.66-3.25l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"
}));

const MaterialFastRewindRounded = (styled.default || styled)(MaterialFastRewindRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFastRewindRounded;