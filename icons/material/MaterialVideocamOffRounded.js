import React from 'react';
import styled from 'styled-components';

const MaterialVideocamOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 14.2V8.91c0-.89-1.08-1.34-1.71-.71L17 10.5V7c0-.55-.45-1-1-1h-5.61l8.91 8.91c.62.63 1.7.18 1.7-.71zM2.71 2.56c-.39.39-.39 1.02 0 1.41L4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.55-.18l2.48 2.48c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.12 2.56c-.39-.39-1.02-.39-1.41 0z"
}));

const MaterialVideocamOffRounded = (styled.default || styled)(MaterialVideocamOffRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVideocamOffRounded;