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

const MaterialCameraFrontSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z"
}));

const MaterialCameraFront = (styled.default || styled)(MaterialCameraFrontSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialCameraFront.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCameraFront;