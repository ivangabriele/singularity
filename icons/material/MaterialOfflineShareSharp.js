import React from 'react';
import styled from 'styled-components';

const MaterialOfflineShareSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "6,5 4,5 4,23 16,23 16,21 6,21"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,1H8v18h12V1z M18,15h-8V5h8V15z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "12.5,10.25 14.5,10.25 14.5,12 17,9.5 14.5,7 14.5,8.75 11,8.75 11,12 12.5,12"
})))));

const MaterialOfflineShareSharp = (styled.default || styled)(MaterialOfflineShareSharpSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialOfflineShareSharp;