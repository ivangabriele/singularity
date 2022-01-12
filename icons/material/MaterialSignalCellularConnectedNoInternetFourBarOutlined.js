import React from 'react';
import styled from 'styled-components';

const MaterialSignalCellularConnectedNoInternetFourBarOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M2,22h16V8h4V2L2,22z"
})))));

const MaterialSignalCellularConnectedNoInternetFourBarOutlined = (styled.default || styled)(MaterialSignalCellularConnectedNoInternetFourBarOutlinedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialSignalCellularConnectedNoInternetFourBarOutlined;