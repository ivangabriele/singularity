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

const MaterialNoPhotographySharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M10.94,8.12L7.48,4.66L9,3h6l1.83,2H22v14.17l-5.12-5.12C16.96,13.71,17,13.36,17,13c0-2.76-2.24-5-5-5 C11.64,8,11.29,8.04,10.94,8.12z M20.49,23.31L18.17,21H2V5h0.17L0.69,3.51L2.1,2.1L21,21l0.9,0.9L20.49,23.31z M14.49,17.32 l-1.5-1.5C12.67,15.92,12.35,16,12,16c-1.66,0-3-1.34-3-3c0-0.35,0.08-0.67,0.19-0.98l-1.5-1.5C7.25,11.24,7,12.09,7,13 c0,2.76,2.24,5,5,5C12.91,18,13.76,17.75,14.49,17.32z"
})));

const MaterialNoPhotographySharp = (styled.default || styled)(MaterialNoPhotographySharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialNoPhotographySharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialNoPhotographySharp;