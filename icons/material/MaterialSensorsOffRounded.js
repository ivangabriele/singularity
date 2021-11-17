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

const MaterialSensorsOffRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.68,18.32c-0.42,0.42-1.12,0.39-1.5-0.08C2.82,16.53,2,14.36,2,12c0-2.04,0.61-3.93,1.66-5.51L2.1,4.93 c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l16.97,16.97c0.39,0.39,0.39,1.02,0,1.41s-1.02,0.39-1.41,0L8.14,10.96 C8.05,11.29,8,11.64,8,12c0,0.8,0.24,1.55,0.64,2.17c0.27,0.41,0.24,0.94-0.1,1.29c-0.43,0.43-1.17,0.4-1.51-0.11 C6.38,14.4,6,13.24,6,12c0-0.93,0.21-1.8,0.58-2.59L5.11,7.94C4.4,9.13,4,10.52,4,12c0,1.89,0.66,3.63,1.76,5 C6.08,17.39,6.04,17.96,5.68,18.32z M15.46,8.54c-0.35,0.35-0.37,0.88-0.11,1.29C15.76,10.45,16,11.2,16,12 c0,0.36-0.05,0.71-0.14,1.04l1.55,1.55C17.79,13.8,18,12.93,18,12c0-1.24-0.38-2.4-1.03-3.36C16.63,8.14,15.9,8.1,15.46,8.54z M18.32,5.68c-0.36,0.36-0.4,0.92-0.08,1.32c1.1,1.37,1.76,3.11,1.76,5c0,1.48-0.4,2.87-1.11,4.06l1.45,1.45 C21.39,15.93,22,14.04,22,12c0-2.36-0.82-4.53-2.18-6.24C19.44,5.29,18.74,5.26,18.32,5.68z"
}));

const MaterialSensorsOffRounded = (styled.default || styled)(MaterialSensorsOffRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSensorsOffRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSensorsOffRounded;