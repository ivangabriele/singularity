import PropTypes from 'prop-types';
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

const MaterialPolicyTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,6.3V11c0,4.52,2.98,8.69,7,9.93c1.74-0.53,3.28-1.62,4.47-3.04l-1.72-1.72 c-1.94,1.29-4.58,1.07-6.29-0.64c-1.95-1.95-1.95-5.12,0-7.07c1.95-1.95,5.12-1.95,7.07,0c1.71,1.71,1.92,4.35,0.64,6.29 l1.45,1.45C18.49,14.65,19,12.85,19,11V6.3l-7-3.11L5,6.3z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,1L3,5v6c0,5.55,3.84,10.74,9,12c0.65-0.16,1.27-0.38,1.87-0.65c1.8-0.82,3.36-2.13,4.57-3.74 C20.04,16.46,21,13.77,21,11V5L12,1z M19,11c0,1.85-0.51,3.65-1.38,5.21l-1.45-1.45c1.29-1.94,1.07-4.58-0.64-6.29 c-1.95-1.95-5.12-1.95-7.07,0c-1.95,1.95-1.95,5.12,0,7.07c1.71,1.71,4.35,1.92,6.29,0.64l1.72,1.72 c-1.19,1.42-2.73,2.51-4.47,3.04C7.98,19.69,5,15.52,5,11V6.3l7-3.11l7,3.11V11z M15,12c0,1.66-1.34,3-3,3s-3-1.34-3-3s1.34-3,3-3 S15,10.34,15,12z"
}))));

const MaterialPolicyTwoTone = (styled.default || styled)(MaterialPolicyTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialPolicyTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPolicyTwoTone;