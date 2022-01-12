import React from 'react';
import styled from 'styled-components';

const MaterialVerticalDistributeOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z"
}));

const MaterialVerticalDistributeOutlined = (styled.default || styled)(MaterialVerticalDistributeOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialVerticalDistributeOutlined;