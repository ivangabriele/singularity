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

const MaterialAppSettingsAltSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M21.81,12.74l-0.82-0.63c0-0.09,0-0.13,0-0.22l0.8-0.63c0.16-0.12,0.2-0.34,0.1-0.51l-0.85-1.48 c-0.07-0.13-0.21-0.2-0.35-0.2c-0.05,0-0.1,0.01-0.15,0.03l-0.95,0.38c-0.08-0.05-0.11-0.07-0.19-0.11l-0.15-1.01 C19.22,8.15,19.05,8,18.85,8h-1.71c-0.2,0-0.37,0.15-0.4,0.34L16.6,9.35c-0.03,0.02-0.07,0.03-0.1,0.05 c-0.03,0.02-0.06,0.04-0.09,0.06l-0.95-0.38c-0.05-0.02-0.1-0.03-0.15-0.03c-0.14,0-0.27,0.07-0.35,0.2l-0.85,1.48 c-0.1,0.17-0.06,0.39,0.1,0.51l0.8,0.63c0,0.09,0,0.13,0,0.23l-0.8,0.63c-0.16,0.12-0.2,0.34-0.1,0.51l0.85,1.48 c0.07,0.13,0.21,0.2,0.35,0.2c0.05,0,0.1-0.01,0.15-0.03l0.95-0.37c0.08,0.05,0.12,0.07,0.2,0.11l0.15,1.01 c0.03,0.2,0.2,0.34,0.4,0.34h1.71c0.2,0,0.37-0.15,0.4-0.34l0.15-1.01c0.03-0.02,0.07-0.03,0.1-0.05c0.03-0.02,0.06-0.04,0.09-0.06 l0.95,0.38c0.05,0.02,0.1,0.03,0.15,0.03c0.14,0,0.27-0.07,0.35-0.2l0.85-1.48C22.01,13.08,21.97,12.86,21.81,12.74z M18,13.5 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C19.5,12.83,18.83,13.5,18,13.5z M5,23V1h14v6h-2V6H7v12h10v-1 h2v6H5z"
})));

const MaterialAppSettingsAltSharp = (styled.default || styled)(MaterialAppSettingsAltSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAppSettingsAltSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAppSettingsAltSharp;