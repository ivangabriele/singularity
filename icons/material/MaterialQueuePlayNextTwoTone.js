import React from 'react';
import styled from 'styled-components';

const MaterialQueuePlayNextTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 15v-3h3v-2h-3V7h-2v3H8v2h3v3zm5 0l3 3-3 3 1.5 1.5L24 18l-4.5-4.5zM8 19v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5z"
}));

const MaterialQueuePlayNextTwoTone = (styled.default || styled)(MaterialQueuePlayNextTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialQueuePlayNextTwoTone;