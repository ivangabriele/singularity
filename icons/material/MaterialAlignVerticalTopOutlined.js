import React from 'react';
import styled from 'styled-components';

const MaterialAlignVerticalTopOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z"
}));

const MaterialAlignVerticalTopOutlined = (styled.default || styled)(MaterialAlignVerticalTopOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialAlignVerticalTopOutlined;