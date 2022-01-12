import React from 'react';
import styled from 'styled-components';

const MaterialBalconyTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M7,16H5v4h2V16z M11,16H9v4h2V16z M6,10v4h5V4.08C8.16,4.56,6,7.03,6,10z M10,12H8v-2h2V12z M13,4.08V14h5v-4 C18,7.03,15.84,4.56,13,4.08z M16,12h-2v-2h2V12z M15,16h-2v4h2V16z M19,16h-2v4h2V16z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10,10v2H8v-2H10z M16,12v-2h-2v2H16z M21,14v8H3v-8h1v-4c0-4.42,3.58-8,8-8s8,3.58,8,8v4H21z M7,16H5v4h2V16z M11,16H9v4h2 V16z M11,4.08C8.16,4.56,6,7.03,6,10v4h5V4.08z M13,14h5v-4c0-2.97-2.16-5.44-5-5.92V14z M15,16h-2v4h2V16z M19,16h-2v4h2V16z"
}));

const MaterialBalconyTwoTone = (styled.default || styled)(MaterialBalconyTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialBalconyTwoTone;