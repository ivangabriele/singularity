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

const MaterialYardSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8,8.22c0-0.86,0.7-1.56,1.56-1.56 c0.33,0,0.64,0.1,0.89,0.28l-0.01-0.12c0-0.86,0.7-1.56,1.56-1.56s1.56,0.7,1.56,1.56l-0.01,0.12c0.26-0.18,0.56-0.28,0.89-0.28 c0.86,0,1.56,0.7,1.56,1.56c0,0.62-0.37,1.16-0.89,1.4C15.63,9.87,16,10.41,16,11.03c0,0.86-0.7,1.56-1.56,1.56 c-0.33,0-0.64-0.11-0.89-0.28l0.01,0.12c0,0.86-0.7,1.56-1.56,1.56s-1.56-0.7-1.56-1.56l0.01-0.12c-0.26,0.18-0.56,0.28-0.89,0.28 C8.7,12.59,8,11.89,8,11.03c0-0.62,0.37-1.16,0.89-1.4C8.37,9.38,8,8.84,8,8.22z M12,19c-3.31,0-6-2.69-6-6 C9.31,13,12,15.69,12,19c0-3.31,2.69-6,6-6C18,16.31,15.31,19,12,19z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "9.62",
  r: "1.56"
}))));

const MaterialYard = (styled.default || styled)(MaterialYardSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialYard.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialYard;