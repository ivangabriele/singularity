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

const MaterialTheaterComedySvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M2,16.5C2,19.54,4.46,22,7.5,22s5.5-2.46,5.5-5.5V10H2V16.5z M7.5,18.5C6.12,18.5,5,17.83,5,17h5 C10,17.83,8.88,18.5,7.5,18.5z M10,13c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1s-1-0.45-1-1C9,13.45,9.45,13,10,13z M5,13 c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1s-1-0.45-1-1C4,13.45,4.45,13,5,13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,3v6h3v2.5c0-0.83,1.12-1.5,2.5-1.5c1.38,0,2.5,0.67,2.5,1.5h-5V14v0.39c0.75,0.38,1.6,0.61,2.5,0.61 c3.04,0,5.5-2.46,5.5-5.5V3H11z M14,8.08c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C15,7.64,14.55,8.08,14,8.08z M19,8.08 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C20,7.64,19.55,8.08,19,8.08z"
}))));

const MaterialTheaterComedy = (styled.default || styled)(MaterialTheaterComedySvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialTheaterComedy.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialTheaterComedy;