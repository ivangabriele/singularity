import React from 'react';
import styled from 'styled-components';

const MaterialBookmarkBorderSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 3H5v18l7-3 7 3V3zm-2 15l-5-2.18L7 18V5h10v13z"
}));

const MaterialBookmarkBorderSharp = (styled.default || styled)(MaterialBookmarkBorderSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBookmarkBorderSharp;