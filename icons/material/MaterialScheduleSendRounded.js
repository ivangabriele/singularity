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

const MaterialScheduleSendRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M17,10c0.1,0,0.19,0.01,0.28,0.01L4.39,4.58C3.73,4.31,3,4.79,3,5.51v3.71c0,0.46,0.31,0.86,0.76,0.97L11,12l-7.24,1.81 C3.31,13.92,3,14.32,3,14.78v3.71c0,0.72,0.73,1.2,1.39,0.92L10,17.05c0-0.02,0-0.03,0-0.05C10,13.14,13.14,10,17,10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.29,19l-1.65-1.65 c-0.09-0.09-0.15-0.22-0.15-0.35v-2.5c0-0.28,0.22-0.5,0.5-0.5h0c0.28,0,0.5,0.22,0.5,0.5v2.29l1.5,1.5c0.2,0.2,0.2,0.51,0,0.71 l0,0C18.8,19.2,18.49,19.2,18.29,19z"
}))));

const MaterialScheduleSendRounded = (styled.default || styled)(MaterialScheduleSendRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialScheduleSendRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialScheduleSendRounded;