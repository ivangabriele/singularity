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

const MaterialFaceRetouchingNaturalSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "13",
  r: "1.25"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.85,10.59C20.79,15.4,17.01,20,12,20c-4.41,0-8-3.59-8-8c0-0.39,3.87-1.12,5.74-5.69c3.42,4.19,8.07,3.73,9.09,3.59 l-1.48-3.25L12.63,4.5l3.5-1.59C9.51-0.14,2,4.77,2,12c0,5.52,4.48,10,10,10c7.21,0,12.12-7.45,9.1-14.13L19.85,10.59z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "13",
  r: "1.25"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.6,5.6L19.5,8l-1.1-2.4L16,4.5l2.4-1.1L19.5,1l1.1,2.4L23,4.5L20.6,5.6z"
}))));

const MaterialFaceRetouchingNaturalSharp = (styled.default || styled)(MaterialFaceRetouchingNaturalSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialFaceRetouchingNaturalSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFaceRetouchingNaturalSharp;