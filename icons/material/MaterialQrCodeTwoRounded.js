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
const MaterialQrCodeTwoRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("path", {
  d: "M15,21h-2v-2h2V21z M13,14h-2v5h2V14z M21,12h-2v4h2V12z M19,10h-2v2h2V10z M7,12H5v2h2V12z M5,10H3v2h2V10z M12,5h2V3h-2V5 z M4.5,4.5v3h3v-3H4.5z M8,9H4C3.45,9,3,8.55,3,8V4c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v4C9,8.55,8.55,9,8,9z M4.5,16.5v3h3v-3 H4.5z M8,21H4c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v4C9,20.55,8.55,21,8,21z M16.5,4.5v3h3v-3H16.5z M20,9 h-4c-0.55,0-1-0.45-1-1V4c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v4C21,8.55,20.55,9,20,9z M19,19v-3l-4,0v2h2v3h4v-2H19z M17,12 l-4,0v2h4V12z M13,10H7v2h2v2h2v-2h2V10z M14,9V7h-2V5h-2v4L14,9z M6.75,5.25h-1.5v1.5h1.5V5.25z M6.75,17.25h-1.5v1.5h1.5V17.25z M18.75,5.25h-1.5v1.5h1.5V5.25z"
}));
const MaterialQrCodeTwoRounded = (styled.default || styled)(MaterialQrCodeTwoRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialQrCodeTwoRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialQrCodeTwoRounded;