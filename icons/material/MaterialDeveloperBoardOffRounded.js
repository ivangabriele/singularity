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
const MaterialDeveloperBoardOffRoundedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M7.83,5H18v10.17L19.83,17H21c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-1v-2h1c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-1V9 h1c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-1V5c0-1.1-0.9-2-2-2H5.83L7.83,5z M15,10h-2c-0.06,0-0.13-0.01-0.19-0.02l-0.79-0.79 C12.01,9.13,12,9.06,12,9V8c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v1C16,9.55,15.55,10,15,10z M11,8v0.17L9.83,7H10 C10.55,7,11,7.45,11,8z M16,12v1.17L13.83,11H15C15.55,11,16,11.45,16,12z M1.39,2.81L1.39,2.81C1,3.2,1,3.83,1.39,4.22l0.61,0.61 C2,4.89,2,4.94,2,5v14c0,1.1,0.9,2,2,2h14c0.06,0,0.11,0,0.16-0.01l1.61,1.61c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L2.81,2.81C2.42,2.42,1.78,2.42,1.39,2.81z M4,19V6.83l2,2V11c0,0.55,0.45,1,1,1h2.17l1.02,1.02 C10.13,13.01,10.06,13,10,13H7c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-2c0-0.06-0.01-0.13-0.02-0.19 L12,14.83v0.46V16c0,0.55,0.45,1,1,1h0.38h0.8l2,2H4z"
})));
const MaterialDeveloperBoardOffRounded = (styled.default || styled)(MaterialDeveloperBoardOffRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialDeveloperBoardOffRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDeveloperBoardOffRounded;