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
const MaterialFireExtinguisherRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M7,19h10v1c0,1.1-0.9,2-2,2H9c-1.1,0-2-0.9-2-2V19z M7,18h10v-5H7V18z M17,4.23v3.54c0,0.63-0.58,1.11-1.21,0.98 l-1.94-0.41c0,0.02,0,0.01-0.01,0.03c1.54,0.62,2.71,1.98,3.06,3.63H7.1c0.34-1.66,1.52-3.02,3.07-3.64 c-0.33-0.26-0.6-0.58-0.8-0.95L5.49,6.6C5.2,6.54,5,6.29,5,6v0c0-0.29,0.2-0.54,0.49-0.6l3.88-0.81C9.87,3.65,10.86,3,12,3 c0.7,0,1.34,0.25,1.85,0.66l1.94-0.41C16.42,3.12,17,3.6,17,4.23z M13,6c-0.03-0.59-0.45-1-1-1s-1,0.45-1,1s0.45,1,1,1 S13,6.55,13,6z"
})));
const MaterialFireExtinguisherRounded = (styled.default || styled)(MaterialFireExtinguisherRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialFireExtinguisherRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFireExtinguisherRounded;