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

const MaterialSensorsOffTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.14,10.96C8.05,11.29,8,11.64,8,12c0,1.1,0.45,2.1,1.17,2.83l-1.42,1.42C6.67,15.16,6,13.66,6,12 c0-0.93,0.21-1.8,0.58-2.59L5.11,7.94C4.4,9.13,4,10.52,4,12c0,2.21,0.9,4.21,2.35,5.65l-1.42,1.42C3.12,17.26,2,14.76,2,12 c0-2.04,0.61-3.93,1.66-5.51L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L8.14,10.96z M17.42,14.59C17.79,13.8,18,12.93,18,12 c0-1.66-0.67-3.16-1.76-4.24l-1.42,1.42C15.55,9.9,16,10.9,16,12c0,0.36-0.05,0.71-0.14,1.04L17.42,14.59z M20,12 c0,1.48-0.4,2.87-1.11,4.06l1.45,1.45C21.39,15.93,22,14.04,22,12c0-2.76-1.12-5.26-2.93-7.07l-1.42,1.42C19.1,7.79,20,9.79,20,12z"
}));

const MaterialSensorsOffTwoTone = (styled.default || styled)(MaterialSensorsOffTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSensorsOffTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSensorsOffTwoTone;