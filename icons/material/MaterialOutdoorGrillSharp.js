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

const MaterialOutdoorGrillSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M17,22c1.66,0,3-1.34,3-3s-1.34-3-3-3c-1.3,0-2.4,0.84-2.82,2H9.14l1.99-3.06C11.42,14.98,11.71,15,12,15 c0.29,0,0.58-0.02,0.87-0.06l1.02,1.57c0.42-0.53,0.96-0.95,1.6-1.21l-0.6-0.93C17.31,13.27,19,10.84,19,8H5 c0,2.84,1.69,5.27,4.12,6.37l-4.5,6.92l1.68,1.09L7.84,20h6.34C14.6,21.16,15.7,22,17,22z M17,18c0.55,0,1,0.45,1,1 c0,0.55-0.45,1-1,1s-1-0.45-1-1C16,18.45,16.45,18,17,18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.41,7h1c0.15-1.15,0.23-1.64-0.89-2.96C9.1,3.54,8.84,3.27,9.06,2H8.07C7.86,3.11,8.1,4.05,8.96,4.96 C9.18,5.2,9.75,5.63,9.41,7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.89,7h1c0.15-1.15,0.23-1.64-0.89-2.96c-0.42-0.5-0.68-0.78-0.46-2.04h-0.99c-0.21,1.11,0.03,2.05,0.89,2.96 C11.67,5.2,12.24,5.63,11.89,7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.41,7h1c0.15-1.15,0.23-1.64-0.89-2.96C14.1,3.54,13.84,3.27,14.06,2h-0.99c-0.21,1.11,0.03,2.05,0.89,2.96 C14.18,5.2,14.75,5.63,14.41,7z"
}))));

const MaterialOutdoorGrillSharp = (styled.default || styled)(MaterialOutdoorGrillSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialOutdoorGrillSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialOutdoorGrillSharp;