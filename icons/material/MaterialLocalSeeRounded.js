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
const MaterialLocalSeeRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M9.5,14c0,1.38,1.12,2.5,2.5,2.5c1.23,0,2.25-0.9,2.46-2.07c-1-1.01-1.83-1.98-2.48-2.93C10.61,11.52,9.5,12.63,9.5,14z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18.65,17.08c-0.37,0.32-0.92,0.32-1.3,0c-1.26-1.08-0.7-0.61-1.3-1.14c-0.83,1.74-2.73,2.87-4.85,2.5 c-1.83-0.32-3.31-1.8-3.63-3.63c-0.42-2.44,1.13-4.58,3.31-5.14C10.3,8.45,10,7.28,10,6.15C10,5.4,10.1,4.68,10.28,4h-0.4 c-0.56,0-1.1,0.24-1.48,0.65L7.17,6H4C2.9,6,2,6.9,2,8v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-6.03 C20.59,15.46,19.35,16.48,18.65,17.08z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17.34,14.42c0.37,0.33,0.95,0.33,1.33,0C22.22,11.25,24,8.5,24,6.15C24,2.42,21.15,0,18,0s-6,2.42-6,6.15 C12,8.5,13.78,11.25,17.34,14.42z M17.27,5.25L18,3l0.73,2.25H21l-1.85,1.47L19.85,9L18,7.59L16.15,9l0.7-2.28L15,5.25H17.27z"
})))));
const MaterialLocalSeeRounded = (styled.default || styled)(MaterialLocalSeeRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialLocalSeeRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialLocalSeeRounded;