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

const MaterialSimCardDownloadRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18,2h-7.17C10.3,2,9.79,2.21,9.41,2.59L4.59,7.41C4.21,7.79,4,8.3,4,8.83V20c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4 C20,2.9,19.1,2,18,2z M11.65,16.65l-2.79-2.79C8.54,13.54,8.76,13,9.21,13H11v-2.99c0-0.55,0.44-0.99,0.99-1h0 C12.55,9,13,9.45,13,10.01V13h1.79c0.45,0,0.67,0.54,0.35,0.85l-2.79,2.79C12.16,16.84,11.84,16.84,11.65,16.65z"
})));

const MaterialSimCardDownloadRounded = (styled.default || styled)(MaterialSimCardDownloadRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSimCardDownloadRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSimCardDownloadRounded;