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
const MaterialPestControlRodentTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17.65,14.75C17.87,14.38,18,13.96,18,13.5c0-1.38-1.12-2.5-2.5-2.5c-1.3,0-2.5,1.08-2.5,2.5 c0,0.69,0.28,1.32,0.73,1.77l-1.41,1.41C11.5,15.87,11,14.74,11,13.5c0-0.92,0.28-1.76,0.75-2.47c-0.22,0.01-0.44,0.02-0.67,0.07 c-1.48,0.32-2.68,1.53-2.99,3.01c-0.26,1.24,0.02,2.45,0.8,3.41C9.66,18.46,10.79,19,12,19h6.53c0.81,0,1.47-0.66,1.47-1.47 c0-0.41-0.17-0.81-0.48-1.09L17.65,14.75z M17,18c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C18,17.55,17.55,18,17,18z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "17",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.86,14.97l-0.93-0.84c0.48-3.45-2.87-6.04-6.05-4.82C13.3,9.11,12.66,9,12,9c-4.26,0-5.65,3.58-5.89,4.85 C4.89,13.47,4,12.35,4,11c0-1.66,1.34-3,3-3h2.5C10.88,8,12,6.88,12,5.5C12,4.12,10.88,3,9.5,3H8C7.45,3,7,3.45,7,4 c0,0.55,0.45,1,1,1h1.5C9.78,5,10,5.22,10,5.5C10,5.78,9.78,6,9.5,6H7c-2.76,0-5,2.24-5,5c0,2.44,1.76,4.47,4.07,4.91 C6.51,18.79,8.99,21,12,21h6.53C21.64,21,23.23,17.11,20.86,14.97z M18.53,19H12c-1.21,0-2.34-0.54-3.11-1.48 c-0.78-0.95-1.06-2.16-0.8-3.41c0.31-1.48,1.51-2.69,2.99-3.01c0.22-0.05,0.45-0.06,0.67-0.07C11.28,11.74,11,12.58,11,13.5 c0,1.24,0.5,2.37,1.32,3.18l1.41-1.41C13.28,14.82,13,14.19,13,13.5c0-1.42,1.2-2.5,2.5-2.5c1.38,0,2.5,1.12,2.5,2.5 c0,0.46-0.13,0.88-0.35,1.25l1.87,1.7c0.31,0.28,0.48,0.67,0.48,1.09C20,18.34,19.34,19,18.53,19z"
}))));
const MaterialPestControlRodentTwoTone = (styled.default || styled)(MaterialPestControlRodentTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialPestControlRodentTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPestControlRodentTwoTone;