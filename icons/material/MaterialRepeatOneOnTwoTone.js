import React from 'react';
import styled from 'styled-components';

const MaterialRepeatOneOnTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,1H3C1.9,1,1,1.9,1,3v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M19,19H7v3l-4-4l4-4v3h10v-4h2V19z M10,10.5V9h3v6h-1.5v-4.5H10z M17,10V7H7v4H5V5h12V2l4,4L17,10z"
})));

const MaterialRepeatOneOnTwoTone = (styled.default || styled)(MaterialRepeatOneOnTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialRepeatOneOnTwoTone;