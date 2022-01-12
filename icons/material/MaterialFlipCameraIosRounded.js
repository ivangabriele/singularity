import React from 'react';
import styled from 'styled-components';

const MaterialFlipCameraIosRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,5h-3.17l-1.24-1.35C15.22,3.24,14.68,3,14.12,3H9.88c-0.56,0-1.1,0.24-1.48,0.65L7.17,5H4C2.9,5,2,5.9,2,7v12 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M13.67,17.7C13.15,17.89,12.59,18,12,18c-2.76,0-5-2.24-5-5H5l2.5-2.5 L10,13H8c0,2.21,1.79,4,4,4c0.46,0,0.91-0.08,1.32-0.23c0.19-0.07,0.39-0.03,0.53,0.11C14.11,17.14,14.01,17.57,13.67,17.7z M16.5,15.5L14,13h2c0-2.21-1.79-4-4-4c-0.46,0-0.91,0.08-1.32,0.23c-0.19,0.07-0.39,0.03-0.53-0.11 C9.89,8.86,9.99,8.43,10.33,8.3C10.85,8.11,11.41,8,12,8c2.76,0,5,2.24,5,5h2L16.5,15.5z"
}))));

const MaterialFlipCameraIosRounded = (styled.default || styled)(MaterialFlipCameraIosRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialFlipCameraIosRounded;