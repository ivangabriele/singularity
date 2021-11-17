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
const MaterialTwoWheelerRoundedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  "fill-rule": "evenodd",
  height: "24",
  width: "24",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20,11c-0.18,0-0.36,0.03-0.53,0.05L17.41,9H19c0.55,0,1-0.45,1-1V7.62c0-0.74-0.78-1.23-1.45-0.89l-2.28,1.14l-2.57-2.57 C13.52,5.11,13.26,5,13,5h-3C9.45,5,9,5.45,9,6v0c0,0.55,0.45,1,1,1h2.17c0.27,0,0.52,0.11,0.71,0.29L14.59,9h-3.35 c-0.16,0-0.31,0.04-0.45,0.11l-3.14,1.57c-0.38,0.19-0.85,0.12-1.15-0.19l-1.2-1.2C5.11,9.11,4.85,9,4.59,9H1c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h3c-2.52,0-4.49,2.32-3.89,4.94c0.33,1.45,1.5,2.62,2.95,2.95C5.68,19.49,8,17.52,8,15l1.41,1.41 C9.79,16.79,10.3,17,10.83,17h1.01c0.72,0,1.38-0.38,1.74-1.01l2.91-5.09l1.01,1.01c-1.13,0.91-1.76,2.41-1.38,4.05 c0.34,1.44,1.51,2.61,2.95,2.94C21.68,19.49,24,17.51,24,15C24,12.79,22.21,11,20,11z M4,17c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2 c1.1,0,2,0.9,2,2C6,16.1,5.1,17,4,17z M20,17c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C22,16.1,21.1,17,20,17z"
})));
const MaterialTwoWheelerRounded = (styled.default || styled)(MaterialTwoWheelerRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialTwoWheelerRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialTwoWheelerRounded;