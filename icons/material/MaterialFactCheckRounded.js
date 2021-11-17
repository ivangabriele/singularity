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

const MaterialFactCheckRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M9,17H6c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1C10,16.55,9.55,17,9,17z M9,13H6 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1C10,12.55,9.55,13,9,13z M9,9H6C5.45,9,5,8.55,5,8c0-0.55,0.45-1,1-1h3 c0.55,0,1,0.45,1,1C10,8.55,9.55,9,9,9z M18.7,11.12l-3.17,3.17c-0.39,0.39-1.03,0.39-1.42,0l-1.41-1.42 c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71l2.47-2.47c0.39-0.39,1.02-0.39,1.41,0l0.01,0.01 C19.09,10.1,19.09,10.74,18.7,11.12z",
  "fill-rule": "evenodd"
}))));

const MaterialFactCheckRounded = (styled.default || styled)(MaterialFactCheckRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialFactCheckRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFactCheckRounded;