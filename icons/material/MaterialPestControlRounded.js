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
const MaterialPestControlRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21,14L21,14c0-0.55-0.45-1-1-1h-2.07c-0.05-0.39-0.12-0.77-0.22-1.14l1.72-0.99c0.48-0.28,0.64-0.89,0.37-1.37l0,0 c-0.28-0.48-0.89-0.64-1.37-0.37L16.92,10c-0.28-0.48-0.62-0.91-0.99-1.29C15.97,8.48,16,8.25,16,8c0-0.8-0.24-1.55-0.65-2.18 l0.94-0.94c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0l-1.02,1.02c-1.68-0.89-3.1-0.33-3.73,0L9.12,3.46 c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l0.94,0.94C8.24,6.45,8,7.2,8,8c0,0.25,0.03,0.48,0.07,0.72 C7.7,9.1,7.36,9.53,7.08,10L5.57,9.13C5.09,8.86,4.48,9.02,4.21,9.5l0,0c-0.28,0.48-0.11,1.09,0.37,1.37l1.72,0.99 c-0.1,0.37-0.17,0.75-0.22,1.14H4c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2.07c0.05,0.39,0.12,0.77,0.22,1.14l-1.72,0.99 c-0.48,0.28-0.64,0.89-0.37,1.37l0,0c0.28,0.48,0.89,0.64,1.37,0.37L7.08,18c1.08,1.81,2.88,3,4.92,3s3.84-1.19,4.92-3l1.51,0.87 c0.48,0.28,1.09,0.11,1.37-0.37l0,0c0.28-0.48,0.11-1.09-0.37-1.37l-1.72-0.99c0.1-0.37,0.17-0.75,0.22-1.14H20 C20.55,15,21,14.55,21,14z M12,17L12,17c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v4C13,16.55,12.55,17,12,17z"
}))));
const MaterialPestControlRounded = (styled.default || styled)(MaterialPestControlRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialPestControlRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPestControlRounded;