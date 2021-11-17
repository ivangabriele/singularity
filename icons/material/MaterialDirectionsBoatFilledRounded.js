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

const MaterialDirectionsBoatFilledRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,21c-1.19,0-2.38-0.35-3.47-0.98c-0.33-0.19-0.73-0.19-1.07,0c-2.17,1.26-4.76,1.26-6.93,0 c-0.33-0.19-0.73-0.19-1.07,0C6.38,20.65,5.19,21,4,21H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1c1.38,0,2.74-0.35,4-0.99 c2.52,1.29,5.48,1.29,8,0c1.26,0.65,2.62,0.99,4,0.99h1c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H20z M3.95,19H4 c1.27,0,2.42-0.55,3.33-1.33c0.39-0.34,0.95-0.34,1.34,0C9.58,18.45,10.73,19,12,19s2.42-0.55,3.33-1.33 c0.39-0.34,0.95-0.34,1.34,0C17.58,18.45,18.73,19,20,19h0.05l1.9-6.68c0.11-0.37,0.04-1.06-0.66-1.28L20,10.62V6c0-1.1-0.9-2-2-2 h-3V2c0-0.55-0.45-1-1-1h-4C9.45,1,9,1.45,9,2v2H6C4.9,4,4,4.9,4,6v4.62l-1.29,0.42c-0.63,0.19-0.81,0.84-0.66,1.28L3.95,19z M6,6 h12v3.97L12.62,8.2c-0.41-0.13-0.84-0.13-1.25,0L6,9.97V6z"
}))));

const MaterialDirectionsBoatFilledRounded = (styled.default || styled)(MaterialDirectionsBoatFilledRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialDirectionsBoatFilledRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDirectionsBoatFilledRounded;