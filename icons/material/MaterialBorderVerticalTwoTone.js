import React from 'react';
import styled from 'styled-components';

const MaterialBorderVerticalTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 3h2v2H7zm0 8h2v2H7zm0 8h2v2H7zm-4 0h2v2H3zM3 3h2v2H3zm0 8h2v2H3zm16-8h2v2h-2zM3 7h2v2H3zm8-4h2v18h-2zM3 15h2v2H3zm12-4h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm0 12h2v2h-2zm-4 0h2v2h-2zm0-16h2v2h-2z"
}));

const MaterialBorderVerticalTwoTone = (styled.default || styled)(MaterialBorderVerticalTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBorderVerticalTwoTone;