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

const MaterialCasinoTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 19h14V5H5v14zM16.5 6c.83 0 1.5.67 1.5 1.5S17.33 9 16.5 9 15 8.33 15 7.5 15.67 6 16.5 6zm0 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM7.5 6C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zm0 9c.83 0 1.5.67 1.5 1.5S8.33 18 7.5 18 6 17.33 6 16.5 6.67 15 7.5 15z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7.5",
  cy: "16.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7.5",
  cy: "7.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.5",
  cy: "16.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16.5",
  cy: "7.5",
  r: "1.5"
}));

const MaterialCasinoTwoTone = (styled.default || styled)(MaterialCasinoTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialCasinoTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCasinoTwoTone;