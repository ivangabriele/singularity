import React from 'react';
import styled from 'styled-components';
const ACCENT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info'
};
const ACCENTS = Object.values(ACCENT);
const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
const SIZES = Object.values(SIZE);
const MaterialCarRepairTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,9.01V9H7v0.01V12h10V9.01z M9,11.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S9.55,11.5,9,11.5z M15,11.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,11.5,15,11.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "10.5",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "10.5",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.78,16h0.44C6.65,16,7,15.64,7,15.19V14h10v1.19c0,0.45,0.34,0.81,0.78,0.81h0.44c0.43,0,0.78-0.36,0.78-0.81v-6.5 c0,0-1.34-4.03-1.56-4.69c-0.05-0.16-0.12-0.29-0.19-0.4c-0.02-0.02-0.03-0.04-0.05-0.07C16.82,3.01,16.28,3,16.28,3H7.72 c0,0-0.54,0.01-0.92,0.54C6.78,3.56,6.77,3.58,6.75,3.6C6.68,3.71,6.61,3.84,6.56,4C6.34,4.66,5,8.69,5,8.69v6.5 C5,15.64,5.35,16,5.78,16z M8.33,5h7.34l0.23,0.69L16.33,7H7.67L8.33,5z M7,9.01V9h10v0.01V12H7V9.01z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "4,17.01 4,19 11,19 11,22 13,22 13,19 20,19 20,17.01"
}))));
const MaterialCarRepairTwoTone = (styled.default || styled)(MaterialCarRepairTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialCarRepairTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCarRepairTwoTone;